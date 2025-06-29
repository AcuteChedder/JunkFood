require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

mongoose.connect('mongodb://127.0.0.1:27017/Burgur').then(() => console.log('mongo conncted')).catch((err) => console.log('connection failed', err))

const Schema = new mongoose.Schema({
    username: String,
    mail: String
})

const UserSchema = new mongoose.Schema({
    nickname: {type: String, unique: true},
    password: String
})

const OrderSchema = new mongoose.Schema({
    nickname: String,
    items: [
        {
            title: String,
            image: String
        }
    ],
})

OrderSchema.pre('save', async function(next) {
    next()
})

Schema.pre('save', async function (next) {
    next()
})

UserSchema.pre('save', async function (next) {
  if(this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

const User = mongoose.model('application', Schema)
const Order = mongoose.model('order', OrderSchema)
const newLogin = mongoose.model('login', UserSchema)

app.post('/application', async (req, res) => {
    try {
        const {username, mail} = req.body
        const user = new User({username, mail})
        await user.save()
        res.status(201).json({message: 'new application added'})
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

app.post('/orders', async (req,res) => {
    try {
        const {items, nickname} = req.body
        const newOrder = new Order({items, nickname})
        await newOrder.save()
    } catch (error) {
        res.status(500).json({err: error.message})
    }
})

app.get('/orders', async (req,res) => {
    try {
        const orders = await Order.find()
        res.json(orders)
    } catch (error) {
        res.status(500).json({err: error.message})
    }
})

app.post('/register', async (req,res) => {
    try {
        const {nickname, password} = req.body
        const user = new newLogin({nickname, password})
        await user.save()
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

app.post('/login', async (req,res) => {
    try {
        const {nickname, password} = req.body
        const user = await newLogin.findOne({nickname})
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!user || !isPasswordValid) {
            return res.status(401).json({error: 'invalid compare'})
        }

        const token = jwt.sign({ nickname: user.nickname }, SECRET, { expiresIn: '2h' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 7200000
        })

        res.json({message: 'user login successfully'})
    } catch (error) {
        console.error(error.message)
    }
    
})

app.get('/me', (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({error: 'Not authenticated'})
    }
    
    try {
        const decoded = jwt.verify(token, SECRET)
        res.json({nickname: decoded.nickname})
    } catch (error) {
        res.status(403).json({error: 'invalid token'})
    }
})

app.post('/logout', (req,res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
    })
    res.status(200).json({ message: 'logged out' })
})

app.listen(port, function() {
    console.log(`Сервер запущен: http://localhost:${port}`)
});
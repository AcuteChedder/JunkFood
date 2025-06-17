const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;
const bcrypt = require('bcrypt')

const app = express();
app.use(express.json());
app.use(cors());

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
    const {nickname, password} = req.body
    const user = await newLogin.findOne({nickname})
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!user || !isPasswordValid) {
        res.status(401).json({error: 'invalid compare'})
    }

    res.json({message: 'login successful', nickname: user.nickname})
})

app.listen(port, function() {
    console.log(`Сервер запущен: http://localhost:${port}`)
});
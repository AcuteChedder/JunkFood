const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Burgur').then(() => console.log('mongo conncted')).catch((err) => console.log('connection failed', err))

const Schema = new mongoose.Schema({
    username: String,
    mail: String
})

Schema.pre('save', async function (next) {
    next()
})

const User = mongoose.model('application', Schema)

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

app.listen(port, function() {
    console.log(`Сервер запущен: http://localhost:${port}`)
});
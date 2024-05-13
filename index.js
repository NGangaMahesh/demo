require('dotenv').config()
const express = require('express')

const app = express();

app.get('/', (req,res) => {
    res.json({status: true, message: 'hi'})
})

app.get('/hello', (req,res) => {
    res.send("hello")
})

app.get('/kkr', (req,res) => {
    res.send("my name is kkr")
})

app.listen(process.env.PORT)
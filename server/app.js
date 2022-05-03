const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./mongoDB')();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
// app.use('./uploads',express.static(path.join(__dirname,'uploads')))
app.use(express.static("uploads"))

app.use('/api',require('./route/router'))

app.listen(3000,()=>console.log('post is http://localhost:3000'))
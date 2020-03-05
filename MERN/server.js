const express = require('express');

const MongoClient = require('mongodb').MongoClient

const mongoose = require('mongoose');

// Initializing Express
const app = express();

app.use(express.json());

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port : ${port}`)); 

const url = 'mongodb://127.0.0.1:27017/E-Marketplace'

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


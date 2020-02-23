const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const MONGODB_URI = "mongodb://localhost/shopping";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => console.log('Mongoose is connected'))
    .catch(err => console.log('Error :' + err))
;

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
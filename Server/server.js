const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const newsController = require('./newsController.js')
const newsRouter = require('./newsRouter.js')

//* API KEY = 4d7bbfbe22bc45028f5d25b28017fbd3


//! need to add password to run it
mongoose.connect('mongodb+srv://jsonseidler:<password>@cluster0-u3aex.mongodb.net/test');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
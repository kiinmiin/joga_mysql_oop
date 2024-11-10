// app packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);


// app start point
app.listen(3029, () => {
    console.log('App is started at http://localhost:3029')
})
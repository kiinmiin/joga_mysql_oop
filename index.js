// app packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass()
const authorControllerClass = require('./controllers/author');
const authorController = new authorControllerClass()

const articleRoutes = require('./routes/article');
const authorRoutes = require('./routes/author');

app.use('/', articleRoutes);
app.use('/', authorRoutes);

// app start point
app.listen(3029, () => {
    console.log('App is started at http://localhost:3029')
})
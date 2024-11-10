const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

const AuthorController = new authorController();

router.get('/author/:id', (req, res) => AuthorController.getAuthorById(req, res));

module.exports = router;
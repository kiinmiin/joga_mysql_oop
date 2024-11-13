const articleDbModel = require('../models/article')
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = [] 
    }
    
    async getAllArticles(req, res){
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    }
    
    async getArticleBySlug(req, res){
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }
    
    async createNewArticle(req, res){
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        } 
        const articleId = await articleModel.create(newArticle)
        res.status(201).json({
            message: `Created article with id ${articleId}`,
            article: {id: articleId, ...newArticle} 
        })
    }
    
    async updateArticle(req, res){
        const articleId = req.params.id;
        console.log(req.body);

        const articleData = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        } 
        try {
            const updatedArticle = await articleModel.update(articleId, articleData)
        } catch (error){
            console.error(error);
            res.status(500).send('Error updating article');
        }}
    } 


module.exports = articleController
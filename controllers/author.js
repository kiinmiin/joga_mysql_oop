const authorDbModel = require('../models/author')
const articleDbModel = require('../models/article')

const authorModel = new authorDbModel();
const articleModel = new articleDbModel();

class authorController {
    constructor(){
        const authors = [] 
    }
    
    async getAuthorById(req, res){
        try {
            const author = await authorModel.findById(req.params.id);
            if (!author) {
                return res.status(404).json({message: 'Author not found'});
            }
            
            const articles = await articleModel.findMany('author_id', author.id);
            author.articles = articles;
            res.status(200).json({author});
        } catch (error) {
            res.status(500).json({error: error.message});
        } 
    } 
} 

module.exports = authorController
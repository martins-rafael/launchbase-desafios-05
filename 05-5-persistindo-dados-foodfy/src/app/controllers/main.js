const Recipe = require('../models/Recipe')

module.exports = {
    index(req, res) {
        Recipe.all(function (recipes) {
            return res.render('main/index', { recipes })
        })
    },
    about(req, res) {
        return res.render('main/about')
    },
    recipes(req, res) {
        Recipe.all(function (recipes) {
            return res.render('main/recipes', { recipes })
        })
    },
    show(req, res) {
        Recipe.find(req.params.id, function (recipe) {
            
            return res.render('main/show', { recipe })
        })
    }
}
const Recipe = require('../models/Recipe')

module.exports = {
    index(req, res) {
        Recipe.all(function (recipes) {
            return res.render('admin/recipes/index', { recipes })
        })
    },
    create(req, res) {
        Recipe.chefsSelectOptions(function (chefsOptions) {
            return res.render('admin/recipes/create', { chefsOptions })
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos.')
        }

        Recipe.create(req.body, function (recipe) {
            return res.redirect(`recipes/${recipe.id}`)
        })
    },
    show(req, res) {
        Recipe.find(req.params.id, function (recipe) {
            if (!recipe) res.send('Receita não encontrada!')

            return res.render('admin/recipes/show', { recipe })
        })
    },
    edit(req, res) {
        const recipeIndex = req.params.index
        const recipe = {
            ...data.recipes[recipeIndex],
            index: recipeIndex
        }
        return res.render('admin/recipes/edit', { recipe })
    },
    put(req, res) {
        const recipeIndex = req.params.index
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos.')
        }

        data.recipes[recipeIndex] = { ...req.body }

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
            if (err) return res.send('Write file error!')
            return res.redirect(`/admin/recipes/${recipeIndex}`)
        })
    },
    delete(req, res) {
        const recipeIndex = req.params.index

        data.recipes.splice(recipeIndex, 1)

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
            if (err) return res.send('Write file error!')
            return res.redirect('/admin/recipes')
        })
    }
}
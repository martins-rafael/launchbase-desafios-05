const Intl = require('intl')
const { age, graduation, date } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render('teachers/index')
    },
    create(req, res) {
        return res.render('teachers/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos.')
        }

        let { avatar_url, name, birth, education, class_type, services } = req.body

        return
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos.')
        }

        let { avatar_url, name, birth, education, class_type, services } = req.body

        return
    },
    delete(req, res) {
        return
    }
}
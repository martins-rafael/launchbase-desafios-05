const Intl = require('intl')
const { age, graduation, date } = require('../../lib/utils')
const Teacher = require('../models/Teacher')

module.exports = {
    index(req, res) {
        Teacher.all(function (teachers) {
            return res.render('teachers/index', { teachers })
        })
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

        Teacher.create(req.body, function (teacher) {
            return res.redirect(`/teachers/${teacher.id}`)
        })

    },
    show(req, res) {
        Teacher.find(req.params.id, function (teacher) {
            if (!teacher) res.send('Professor não encontrado!')

            teacher.age = age(teacher.birth_date)
            teacher.education_level = graduation(teacher.education_level)
            teacher.subjects_taught = teacher.subjects_taught.split(',')
            teacher.created_at = date(teacher.created_at).format

            return res.render('teachers/show', { teacher })
        })
    },
    edit(req, res) {
        Teacher.find(req.params.id, function (teacher) {
            if (!teacher) res.send('Professor não encontrado!')
            
            teacher.birth_date = date(teacher.birth_date).iso

            return res.render('teachers/edit', { teacher })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos.')
        }
        
        Teacher.update(req.body, function () {
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req, res) {
        Teacher.delete(req.body.id, function () {
            return res.redirect('/teachers')
        })
    }
}
const { date, grade, formatHours } = require('../../lib/utils')
const Student = require('../models/Student')

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query
        page = page || 1
        limit = limit || 3
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(students) {
                const pagination = {
                    total: Math.ceil(students[0].total / limit),
                    page
                }

                return res.render('students/index', { students, filter, pagination })
            }
        }

        Student.paginate(params)
    },
    create(req, res) {
        Student.teacherSelectOptions(function (teachersOption) {
            return res.render('students/create', { teachersOption })
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos')
        }

        Student.create(req.body, function (student) {
            return res.redirect(`/students/${student.id}`)
        })
    },
    show(req, res) {
        Student.find(req.params.id, function (student) {
            if (!student) return res.send('Estudante não encontrado!')

            student.birth_date = date(student.birth_date).birthDay
            student.education_level = grade(student.education_level)
            student.weekly_classes = formatHours(student.weekly_classes)

            return res.render('students/show', { student })
        })
    },
    edit(req, res) {
        Student.find(req.params.id, function (student) {
            if (!student) return res.send('Estudante não encontrado!')

            student.birth_date = date(student.birth_date).iso

            Student.teacherSelectOptions(function (teachersOption) {
                return res.render('students/edit', { student, teachersOption })
            })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos.')
        }

        Student.update(req.body, function () {
            return res.redirect(`/students/${req.body.id}`)
        })
    },
    delete(req, res) {
        Student.delete(req.body.id, function () {
            return res.redirect('/students')
        })
    }
}
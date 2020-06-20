module.exports = {
    age(timestamp) {
        const today = new Date
        const birthday = new Date(timestamp)

        let age = today.getFullYear() - birthday.getFullYear()
        const month = today.getMonth() - birthday.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthday.getDate()) {
            age -= 1
        }

        return age
    },
    date(timestap) {
        const date = new Date(timestap)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },
    formatHours(weekly_classes) {
        return `0${weekly_classes}`.slice(-2)
    },
    graduation(education) {
        return (education == 'medio') ? 'Ensino Médio Completo'
            : (education == 'superior') ? 'Ensino Superior Completo'
                : (education == 'mestrado') ? 'Mestrado'
                    : 'Doutorado'
    },
    grade(education) {
        const grades = {
            '5EF': '5º Ano do Fundamental',
            '6EF': '6º Ano do Fundamental',
            '7EF': '7º Ano do Fundamental',
            '8EF': '8º Ano do Fundamental',
            '9EF': '9º Ano do Fundamental',
            '1EM': '1º Ano do Ensino Médio',
            '2EM': '2º Ano do Ensino Médio',
            '3EM': '3º Ano do Ensino Médio'
        }

        return grades[education]
    }
}
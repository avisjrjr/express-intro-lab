import express from 'express'
import * as studemt1 from './data/student-list.js'

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.redirect('/students')
})

app.get('/home', (req, res) => {
    res.render('students/home')
})

app.get('/students', (req,res) => {
    studemt1.find({}, (error, stud) => {
        res.render('students/index', {
            stud: stud,
            error: error
        })
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
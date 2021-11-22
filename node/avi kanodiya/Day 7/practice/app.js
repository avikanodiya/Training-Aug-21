const express = require('express');
const app = express();
const logger = require('./logger')
const router = express.Router()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static('public'))
router.use((req, res, next) => {
    console.log("Time:", Date.now());
})


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.listen(3001, console.log(console.log(`Example app listening on port 3001!`)))
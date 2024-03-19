const express = require('express');
const router = express.Router();

router.get('/', handleHome);
router.get('/student', handleStudent);
router.post('/student', handleForm);

function handleHome(req, res) {
    res.render('home');
}

function handleStudent(req, res) {
    res.render('student');
}

function handleForm(req, res) {
    const { name, lastname, age, gender, code, studyField } = req.body;

    console.log('Form data:', req.body);
    res.redirect('/student'); 
}

module.exports = router;

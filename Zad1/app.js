const express = require('express');
const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/student', (req, res) => {
    res.render('student');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

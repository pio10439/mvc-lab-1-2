const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/student', (req, res) => {
    res.render('student', { student: req.query });
});

app.post('/student', (req, res) => {
    const studentData = req.body;
    const fileName = `${studentData.code}.txt`;
    const dataToWrite = `Student ID: ${studentData.code}\nFirst Name: ${studentData.name}\nLast Name: ${studentData.lastname}\nGender: ${studentData.gender}\nAge: ${studentData.age}\nStudy Field: ${studentData.studyField}`;

    fs.writeFile(fileName, dataToWrite, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error writing file');
        } else {
            console.log('File written successfully');
            res.redirect(`/student?${new URLSearchParams(studentData).toString()}`);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

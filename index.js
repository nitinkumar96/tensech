const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const { addStudent, getAll, getById, updateStudent, deleteStudent } = require('./controllers/studentController');

app.use(bodyParser.json());

app.post('/api/student', addStudent);

app.get('/api/student', getAll);

app.get('/api/student/:id', getById);

app.put('/api/student/:id', updateStudent);

app.delete('/api/student/:id', deleteStudent);

app.listen(PORT, () => {
    console.log('Server running');
})
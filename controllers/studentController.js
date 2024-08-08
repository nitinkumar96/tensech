const { students } = require('../config/student');
const fs = require('fs')



const addStudent = function(req, res) {
    const user = req.body;
    console.log(user);

    let users;
    fs.readFile("student.json", (error, data) => {
        if (error) {
          console.error(error);
          throw err;
        }
        users = JSON.parse(data);
        console.log(users);

        const student = users.find(s => s.roll === user.roll);

        if(student) {
            return res.status(500).json({error: "Already exists"});
        }

        const studentData = users;
        data = JSON.stringify(studentData);

        fs.writeFile("student.json", data, (error) => {
            if (error) {
            console.error(error);
        
            throw error;
            }
        
            console.log("data.json written correctly");
        });
        
        res.status(200).json({message: "Student Added"});
    });
}

const getAll = function(req, res) {
    try {
        let users;
        fs.readFile("student.json", (error, data) => {
            if (error) {
            console.error(error);
            throw err;
            }
            users = JSON.parse(data);
            res.status(200).json(users);
        });
        
    }
    catch(error) {
        res.status(500).json(error);
    }
    
}

const getById = function(req, res) {
    try {
        const id = req.params.id;
        console.log(id);
        
        const studentData = students;
        const student = studentData.find(s => s.roll === id);
        
        if(!student) {
            res.status(404).json({message: "Not Found"});
        }
       
        res.status(200).json(student);
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const updateStudent = function(req, res) {
    const rollNo = req.params.id;
    const data = req.body;
    console.log(rollNo, data);

    const studentData = students;
    const student = studentData.find(s => s.roll === id);

    if(!student) {
        res.status(404).json({message: "Not Found"});
    }

    // Put operation in students file
    res.status(200).json({roll: rollNo, message: "Student Updated"});
}

const deleteStudent = function(req, res) {
    const rollNo = req.params.id;
    console.log(rollNo);

    const studentData = students;
    const student = studentData.find(s => s.roll === id);

    if(!student) {
        res.status(404).json({message: "Not Found"});
    }
    // Delete operation in students file

    res.status(200).json({roll: rollNo, message: "Student Deleted"});
}

module.exports = {
    addStudent,
    getAll,
    getById,
    updateStudent,
    deleteStudent
}
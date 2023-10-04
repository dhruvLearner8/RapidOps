const express = require("express");
const router = express.Router();
const { connextMySql, connectMySql } = require('../connections/connection.js');

const { handleGetStudentById, 
        handleGetAllStudents,
        handlePostStudent,
        handleUpdateStudentById,
        handleDeleteStudentById } = require('../controllers/user.js');

router.get('/',handleGetAllStudents);

router.get('/:id',handleGetStudentById);

router.post('/',handlePostStudent);

router.put('/:id',handleUpdateStudentById);

router.delete('/:id',handleDeleteStudentById);

module.exports = router;
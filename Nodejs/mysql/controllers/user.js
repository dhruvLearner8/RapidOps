const { connectMySql } = require('../connections/connection.js');

function handleGetStudentById(req,res){

        connectMySql.query(`SELECT * FROM student_info WHERE id = ${req.params.id}`,(err,result)=>{
            if(err){
                res.send(err);
            }
            if(!result.length){
                res.send("ID not found");
                return;
            }
            res.send(result);
        })
    };


function handleGetAllStudents (req,res){
         
    connectMySql.query('SELECT * FROM student_info',(err,result)=>{
        if(err){
            res.send(err);
            
        }
        res.send(result);
     
    });
}

function handlePostStudent(req,res){
    connectMySql.query(`SELECT COUNT(*) as row_count from student_info`,(err,result)=>{
        if(err){
            res.send(err);
            return;
        }
        const index = result[0].row_count+1;
         console.log(index);
        connectMySql.query(`INSERT INTO student_info(id,name) VALUES(${index},'${req.body.name}');`,(error,result1)=>{
            if(error){
                res.send(error)
            }
            res.send(result1);
        });
    })
};

function handleUpdateStudentById(req,res){
    // if student with id exist
    connectMySql.query(`SELECT * FROM student_info where id=${req.params.id};`,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(!result.length){
            res.send("Id not found");
            return;
        }
        const id = result[0].id;

        connectMySql.query(`UPDATE student_info set name = '${req.body.name}' where id = ${req.params.id};`,(error,result1)=>{
            if(error){
                res.send(error);
            }
            res.send(result1);
        });
    });
};

function handleDeleteStudentById(req,res){
    connectMySql.query(`SELECT * FROM student_info where id=${req.params.id};`,(error,result)=>{
        if(error){
            res.send(error);
            return;
        }
        if(!result.length){
            res.send("ID not found");
            return;
        }
        connectMySql.query(`DELETE from student_info where id=${req.params.id};`,(err,res1)=>{
            if(err){
                res.send(err);
                return;
            }
            res.send(res1);
        });
    })
}

module.exports = {
    handleGetStudentById,
    handleGetAllStudents,
    handlePostStudent,
    handleUpdateStudentById,
    handleDeleteStudentById
}





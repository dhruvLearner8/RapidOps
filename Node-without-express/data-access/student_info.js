function makeQuery ({connectDB,mysql}){
    return({
        getAllStudents,
        addStudent
    });

    async function getAllStudents(){
        try{
            return new Promise((resolve,reject)=>{
                connectDB.query(`select * from student_info`,(err,result)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                })
            })
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function addStudent(id,name){
        try{
            return new Promise((resolve,reject)=>{
                connectDB.query(`insert into student_info (id,name) values (${id},'${name}');`,(err,result)=>{
                    if(err){
                        reject(err);
                    }
                    resolve("Success");
                });
            })
            
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeQuery;
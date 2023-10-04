
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1,name:'Course1'},
    {id:2,name:'Course2'},
    {id:3,name:'Course3'},
];

// GET Request

app.get('/',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        res.send(course);
    }
    else{
        res.status(404).send("Course With this ID does not exist");
    }
    
})

// POST Request

app.post('/api/courses',(req,res)=>{

    const result = validateCourse(req);
    
    if(result.error){
        res.send(result.error.details[0].message);
    }

    const course = {
        id: courses.length+1,
        name: req.body.name
    }

    courses.push(course);
    res.send(courses);
})

// PUT Request

app.put('/api/courses/:id',(req,res)=>{

    // first validate it
    const result = validateCourse(req);

    if(result.error){
        res.send(result.error.details[0].message);
    }

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Course with this ID not Found");
    }

    course.name = req.body.name;
    res.send(courses);
})

//DELETE Request

app.delete('/api/courses/:id',(req,res)=>{
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.send("Course with this ID does not exist");
    }
    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(courses);
})

// validation Function to validate if course name is a string, length>=3, and not null

function validateCourse(course){

    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course.body,schema);
}

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
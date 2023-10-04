const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    {id:1,name:'action'},
    {id:2,name:'comedy'},
    {id:3,name:'drama'},
];

// GET Request

app.get('/api/genres',(req,res)=>{
    res.send(genres);
});

app.get('/api/genres/:id',(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre){
        res.send("Genre with this ID does not exist");
    }
    res.send(genre);
});

// POST Request

app.post('/api/genres',(req,res)=>{
    const result = validateGenre(req);

    if(result.error){
        res.send(result.error.details[0].message);
    }

    const genre = {
        id: genres.length+1,
        name: req.body.name
    }

    genres.push(genre);
    res.send(genres);

});

// PUT Request

app.put('/api/genres/:id',(req,res)=>{
    const result = validateGenre(req);

    if(result.error){
        res.send(result.error.details[0].message);
    }
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre){
        res.status(404).send("Genre with this id not found");
    }
    genre.name = req.body.name;
    res.send(genre);
});

// DELETE Request

app.delete('/api/genres/:id',(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre){
        res.status(404).send("Genre with this ID not found");
    }
    const index = genres.indexOf(genre);
    genres.splice(index,1);
    res.send(genres);
});

// Function to validate input

function validateGenre(genre){
    const schema = {
        name : Joi.string().min(3).required()
    }

    return Joi.validate(genre.body,schema);
}

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});




const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
 const {checkAuthUser } = require('./middlewares/auth-middleware');



const registerRouter = require('./routes/register.js');
const loginRouter = require('./routes/login.js');
const postRouter = require('./routes/posts.js')

app.use("/register",registerRouter);
app.use("/login",loginRouter);
app.use("/posts",checkAuthUser,postRouter)


app.listen(3000,()=>{
    console.log("App listening on port 3000");
})
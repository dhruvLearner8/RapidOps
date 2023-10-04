const express = require('express');
const app = express();

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const {checkAuthUser } = require('./middlewares/auth-middleware');

const {registerRouter} = require('./routes/index.js');
const {loginRouter} = require('./routes/index.js');


app.use("/register",registerRouter);
app.use("/login",loginRouter);
app.use("/posts",checkAuthUser,postRouter)

app.listen(3000,()=>{
    console.log("App listening on port 3000");
})
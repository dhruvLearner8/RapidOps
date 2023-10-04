const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;


app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Set the views directory
app.set('trust proxy', true)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("./rest-services");
app.use("/",router);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
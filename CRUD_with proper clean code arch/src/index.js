const express = require("express");
const morgan = require("morgan");
const route = require("./rest-services");
// const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/users", route);

const port = 9000;
app.listen(port, () => {
  console.log(`server started running on port ${port}...`);
});

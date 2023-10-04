const express = require("express");
const router = express.Router();
const controller=require("./controllers")

router
    .get("/home",controller.homeControllerAction)
    .get("/post",controller.getAllPostController)
    .post("/post",controller.insertPostAction)
    .get("/post/edit/:id",controller.getEditPostAction)
    .post("/post/edit/:id",controller.updatePostAction)
    .get("/post/delete/:id",controller.deletePostAction);

module.exports=router
const express = require("express");
const router = express.Router();
const controller=require("./controllers")
const { 
    logsMiddleware,
    ipAddressMiddleware,
    errorHandlerMiddleware
} = require("./middlewares");

router.use(ipAddressMiddleware);

router
    .get("/home",controller.homeControllerAction)
    .get("/post",logsMiddleware,controller.getAllPostController)
    .post("/post",logsMiddleware,controller.insertPostAction)
    .get("/post/edit/:id",logsMiddleware,controller.getEditPostAction)
    .post("/post/edit/:id",logsMiddleware,controller.updatePostAction)
    .get("/post/delete/:id",logsMiddleware,controller.deletePostAction);

// router.use(errorHandlerMiddleware)

router.use((req, res, next) => {
    res.status(404).render("error", { message: "Page Not Found" });
});

module.exports=router
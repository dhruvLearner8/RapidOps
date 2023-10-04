const express = require("express");
const router = express.Router();
const authCheck = require("../middlewares/authCheck")


router.get('/',authCheck,(req,res)=>{
    res.render("profile",{user:req.user});
})

module.exports = router;
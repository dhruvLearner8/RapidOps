
const { 
    getAllPost,
    insertPost,
    getEditPost,
    updatePost,
    deletePost
                } = require("../use-cases");

const makePostController = require("./getAllPosts");
const getAllPostController = makePostController({getAllPost});

const makeHomeControllerAction = require("./home");
const homeControllerAction = makeHomeControllerAction(); 

// ---------------------- STARTED TO PROVIDE PROPER NAMING CONVENCTION-------------

const makeInsertPostAction = require("./insertPost");
const insertPostAction = makeInsertPostAction({insertPost});

const makeGetEditPostAction = require("./getEditPost");
const getEditPostAction = makeGetEditPostAction({getEditPost});

const makeUpdatePostAction = require("./updatePost");
const updatePostAction = makeUpdatePostAction({updatePost});

const makeDeletePostAction = require("./deletePost");
const deletePostAction = makeDeletePostAction({deletePost});



module.exports = {
    getAllPostController,
    homeControllerAction,
    insertPostAction,
    getEditPostAction,
    updatePostAction,
    deletePostAction,
}
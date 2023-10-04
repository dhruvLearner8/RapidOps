const {obj} = require("../data-access")

const makePostUseCase = require("./getAllPosts");
const getAllPost = makePostUseCase({obj});

const makeInsertPost = require("./insertPost");
const insertPost = makeInsertPost({obj});

const makeGetEditPost = require("./getEditPost");
const getEditPost = makeGetEditPost({obj});

const makeUpdatePost = require("./updatePost");
const updatePost = makeUpdatePost({obj});

const makeDeletePost = require("./deletePost");
const deletePost = makeDeletePost({obj});

module.exports = {
    getAllPost,
    insertPost,
    getEditPost,
    updatePost,
    deletePost
}
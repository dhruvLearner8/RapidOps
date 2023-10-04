const express = require('express');

const router = express.Router();

const {
    getAllPost,
    createPost,
    getMyPosts,
    updatePost,
    deletePost,
    getSavedPost,
    savePost
} = require('../controllers/posts')

router.get('/',getAllPost);
router.get('/myPosts',getMyPosts);

router.post('/create',createPost)

router.put('/update/:id',updatePost);

router.delete('/delete/:id',deletePost);

router.get('/saved',getSavedPost);

router.post('/saved/:id',savePost);

module.exports = router;
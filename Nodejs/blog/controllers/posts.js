const { connectBlogDatabase } = require('../connections/login');
const { post } = require('../routes/login');



async function getAllPost(req,res){
   
    const posts = await getPostFromDatabase();
    res.send(posts);
}


function getPostFromDatabase(){
    return new Promise((resolve,reject)=>{
        connectBlogDatabase.query('select * from blog',(err,result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
            
        })
    });
}

async function createPost(req,res){
    if(req.user===null){
        res.send("Login Required");
        return;
    }

    const title = req.body.title;
    const description = req.body.description;

    if(!title || !description){
        res.send("title and description are required");
        return;
    }
    connectBlogDatabase.query(`insert into blog (title,description,user_id) values ('${title}','${description}','${req.user}');`,(err,result)=>{
        if(err){
            res.send(err);
            return;
        }
        res.send("Post added succesfully");
    });
}

function getMyPosts(req,res){
    if(req.user===null){
        res.send("Login Required");
        return;
    }

    connectBlogDatabase.query(`select * from blog where user_id = ${req.user}`,(err,result)=>{
        if(err){
            res.send(err);
            return;
        }
        res.send(result);
    });
}

async function updatePost(req,res){
    if(req.user===null){
        res.send("Login Required");
        return;
    }

    const postId = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const isCorrectAuthor = await checkAuthor(postId,req.user);
    console.log(isCorrectAuthor)
    if(isCorrectAuthor === true){
        
        connectBlogDatabase.query(`update blog set title ='${title}', description='${description}' where id = ${postId};`,(err,result)=>{
            if(err){
                res.send(err);
                return;
            }
            res.send("Post updated succesfully");
            return;
        });

    }
    else{
        res.send(isCorrectAuthor);
        return;
    }
   
}

async function deletePost(req,res){
    if(req.user===null){
        res.send("Login Required");
        return;
    }
    
    const postId = req.params.id;
    const isCorrectAuthor = await checkAuthor(postId,req.user);
    if(isCorrectAuthor === true){
        connectBlogDatabase.query(`delete from user_saved_blog where blog_id = ${postId}`,(error,result1)=>{
            if(error){
                res.send(error);
                return;
            }
            connectBlogDatabase.query(`delete from blog where id = ${postId};`,(err,result)=>{
            if(err){
                res.send(err);
                return;
            }
            res.send("deleted post succesfully");
        })

        })

    }
    else{
        res.send(isCorrectAuthor);
    }

}

async function checkAuthor(postId,userId){
    return new Promise((resolve,reject)=>{
        try{
        connectBlogDatabase.query(`select user_id from blog where id = ${postId}`,(err,result)=>{
            if(err){
                reject(err);
            }
            console.log(result);
            if(result[0].user_id === userId){
                resolve(true)
            }
            resolve("user not allowed to edit this post");
            
        })
    }
    catch(e){
        console.log(e);
        reject(e);
    }
    })
}

async function getSavedPost(req,res){
    if(req.user===null){
        res.send("Login Required");
        return;
    }

    connectBlogDatabase.query(`select * from user_saved_blog where user_id = ${req.user};`,(err,result)=>{
        if(err){
            res.send(err);
            return;
        }

        res.send(result);
    })
}

async function savePost(req,res){
    if(req.user===null){
        res.send("Login Required");
        return;
    }

    const postId = req.params.id;

    connectBlogDatabase.query(`insert into user_saved_blog (user_id,blog_id) values(${req.user},${postId})`,(err,result)=>{
        if(err){
            res.send(err);
            return;
        }
        res.send("Post saved succesfully");
    });
}

module.exports = { 
    getAllPost,
    createPost,
    getMyPosts,
    updatePost,
    deletePost,
    getSavedPost,
    savePost
}
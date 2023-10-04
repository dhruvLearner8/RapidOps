console.log("Before");
getUser(1,(user)=>{
    console.log('User ', user);
    getRepo(user.githubUserName,(repo)=>{
        console.log(repo);
    })
});
console.log("After");

function getUser(id,callback){
    setTimeout(() => {
        console.log("After fetching data from database");
        callback({id:id,githubUserName:'luffy'});
    }, 2000);
}


function getRepo(username,callback){
    setTimeout(()=>{
        console.log("User's repositories are: ");
        callback(['Repo1','Repo2','Repo3']);
    },2000)
    
}





var popup;

var popup1;

function register(){
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;
    let confirmPassword = document.getElementById('registerConfirmPassword').value;
    let roleArray = document.getElementsByName('role');
    let role;

    if(password!=confirmPassword){
        alert("Password Not matching!!");
        return;
    }

    for(let i=0;i<roleArray.length;i++){
        if(roleArray[i].checked){
             
            role = roleArray[i].value;
        }
    }


    var userList = JSON.parse(localStorage.getItem("userList"));

    if(userList==null){
        userList = [];
    }

    for(let i of userList){
        if(username === i.username){
            alert("user already exist");
            return;
        }
    }
   

    const userObject = {
        username:username,
        password:password,
        role:role
    }

    userList.push(userObject);
    localStorage.setItem('userList', JSON.stringify(userList));
    console.log(userList);
    window.location.href = "login.html";
   
}


function login(){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let isAuthenticated = false;
    var userList = JSON.parse(localStorage.getItem("userList"));
    for(let i of userList){
        if(username === i.username){
            if(password === i.password){
                console.log("Succesfull");
                isAuthenticated = true;
                if(i.role == 'admin'){
                    console.log("admin ");
                   // displayAdmin();
                     window.location.href = "home_admin.html";
                }
                if(i.role == 'user'){
                    console.log("student");
                    localStorage.setItem("studentUsername",username);
                    window.location.href = "home_student.html";
                }
                // window.location.href = "home.html";
            }
            else{
                alert("password incorrect");
                return;
            }
        }
    }
    if(!isAuthenticated){
        alert("Username Doesn not exist!!");
        return;
    }
    
}

function displayAdmin(){
    
    
    console.log("admin page loaded");
    var courseList = JSON.parse(localStorage.getItem('courseList'));
    let ul = document.getElementById('courseListId');
    console.log(courseList);
    ul.innerHTML = '';
    let id =0;
    if(courseList.length>0){

    
    for(let course of courseList){
        let li = document.createElement('li');
        li.textContent = course;

        let assignButton = document.createElement('button');
        assignButton.textContent = "Assign";
        assignButton.id = 'assignButton'+id;
        id++;
        assignButton.addEventListener('click',function(){
            console.log("assigned clicked");
            localStorage.setItem("courseName",course);
            popup = window.open('popup.html', 'popup', 'width=500,height=400');
        });
        
        assignButton.style = "margin-left:5px"
        li.appendChild(assignButton);
        ul.appendChild(li);

    }
}

}


function displayStudent(){
    var userList = JSON.parse(localStorage.getItem('userList'));
    var currentStudent = localStorage.getItem('studentUsername');
    var studentName = document.getElementById("studentName");
    console.log(userList);
    studentName.textContent = currentStudent;
    console.log(currentStudent);
    ul = document.getElementById('studentCourseList');
    for(let i of userList){
        if(i.username === currentStudent){
            // console.log(i.username+ " "+i.role);
            // console.log(i.courses);
           for(let j=0;j<i.courses.length;j++){
            console.log(i.courses[j]);
            if(i.courses[j]!=null){
                let li = document.createElement('li');
                li.textContent = i.courses[j];
                ul.appendChild(li);
            }
            
           }
            
        }
    }
}


function addCourse(){
    var courseList = JSON.parse(localStorage.getItem('courseList'));
    if(courseList == null){
        courseList = [];
    }
    let courseName = prompt("Enter course Name");
    console.log(courseName);

    courseList.push(courseName);
    localStorage.setItem('courseList',JSON.stringify(courseList));

    displayAdmin();    

}


function showAllStudents(){
    console.log("page loaded");
    var userList = JSON.parse(localStorage.getItem('userList'));
    console.log(userList);

    console.log(localStorage.getItem('courseName'));


    var ul = document.getElementById('studentList'); 
    var j=0;
    for(let i of userList){
        if(i.role=='user'){
            let li = document.createElement('li');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'checkbox'+j;
            checkbox.value = i.username;
            let studentName = document.createElement('p');
            studentName.textContent = i.username;
            studentName.style.marginLeft = '10px';
            li.appendChild(checkbox);
            li.appendChild(studentName);
            ul.appendChild(li);
            j++;
        }
        
    }

}

function assignCourse(){
    let i=0;
    var userList = JSON.parse(localStorage.getItem('userList'));
    let length_userList = userList.length-1;
    var courseName = localStorage.getItem('courseName');
  
    for(i=0;i<length_userList;i++){
        let checkbox = document.getElementById('checkbox'+i);
        console.log(checkbox);
        if(checkbox.checked){
           
            let username = checkbox.value;

            for(let prop of userList){
                if(prop.username===username){
                    console.log(prop.username);
                    if (!prop.courses) {
                        console.log("Initializing courses array");
                        prop.courses = [];
                      }
                      console.log(prop.courses);
                      for(let j=0;j<prop.courses.length-1;j++){
                        if(courseName == prop.courses[i]){
                            alert("course already assigned");
                            return;
                        }
                      }
                      prop.courses.push(courseName);
                      console.log(prop.courses);
                      localStorage.setItem('userList', JSON.stringify(userList));
                      
                }
            }
        //    alert("succesfully assigned course");

        }
    }
    
    alert("succesfully assigned course");
   // popup.close();

}


function loadStudentData(){
    var userList = JSON.parse(localStorage.getItem('userList'));

    var ul = document.getElementById('studentData');

    for(let user of userList){
        if(user.role=='user'){

        
        let li = document.createElement('li');
        li.style.display = 'flex';
        let p1 = document.createElement('p');
        p1.textContent = user.username;
        p1.style.marginLeft = '10px';
        console.log(p1);
        let p3 = document.createElement('p');
        p3.textContent = '-'
        p3.style.marginLeft = '20px';
        let p2 = document.createElement('p');
        p2.style.marginLeft = '20px';
        p2.textContent = user.courses;

        let button = document.createElement('button');
        button.textContent = 'Remove Courses';
        button.id = user.username;
        button.addEventListener('click',function(){
            
            localStorage.setItem("tempStudent",user.username);
           popup1 = window.open('popup_course.html', 'popup', 'width=500,height=400');
        });
        button.style.marginLeft = '20px';

        li.appendChild(p1);
        li.appendChild(p3);
        li.appendChild(p2);
        li.appendChild(button);
        ul.appendChild(li);
    }
    }
}

function showAllCourses(){
    var userList = JSON.parse(localStorage.getItem('userList'));
    var tempStudent = localStorage.getItem('tempStudent');
    console.log(tempStudent);
    var ul = document.getElementById('currentCourseList');
    for(let user of userList){
        console.log(user);
        if(user.username === tempStudent){
            console.log("user founde");
            for(let j=0;j<user.courses.length;j++){
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = user.courses[j];

                let p = document.createElement('p');
                p.textContent = user.courses[j];
                p.style.marginLeft='10px';

                let li = document.createElement('li');
                li.style.display = 'flex';
                li.appendChild(checkbox);
                li.appendChild(p);
                ul.append(li);
            }
            break;
            // checkbox.id = 'checkbox'+
        }
    }
}


function removeCourse(){
    var userList = JSON.parse(localStorage.getItem('userList'));
    var tempStudent = localStorage.getItem('tempStudent');

    for(let user of userList){
        if(user.username === tempStudent){

            for(let i=user.courses.length-1;i>=0;i--){
                let checkbox = document.getElementById(user.courses[i]);
                if(checkbox.checked){
                    // delete user.courses[i];
                    user.courses.splice(i, 1);
                    localStorage.setItem('userList',JSON.stringify(userList));
                }
            }
        }
    }
    alert("succesfully removed courses");
    popup1.close();
}
var array1 = [];
var firstName;
var lastName;

var deleteIndexArray=[];


function insertItem(){
    event.preventDefault();
    console.log("insert item called");
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    
    if(firstName=='' || lastName==''){
        return
    }
    console.log(firstName,lastName);

    const obj1 = {
        id : array1.length+1,
        fname: firstName,
        lname: lastName
    }
    array1.push(obj1);
    console.log(array1);
    document.getElementById("fname").value='';
    document.getElementById("lname").value='';
    displayData();

}

function editItem(id){
    
    let updatedFirstName = document.getElementById("displayfname"+id).value;
   
    let updatedLastName = document.getElementById("displaylname"+id).value;
    array1[id].fname = updatedFirstName;
    array1[id].lname = updatedLastName;
   
}

function deleteItem(id) {
    // Remove the corresponding item from the JavaScript object array
    array1.splice(id, 1);
  
    // Refresh the table display
    displayData();
  }



//   function displayData() {
//     var outputElement = document.getElementById('output');
//     outputElement.innerHTML = '';
  
//     for (var i = 0; i < array1.length; i++) {
//       var html = '<div style="margin-top:10px">';
//       html += '<input type="text" value="' + array1[i].fname + '" id="displayfname'+i+'"readonly style="margin-right:10px";>';
//       html += '<input type="text" value="' + array1[i].lname + '" id="displaylname'+i+'"readonly style="margin-right:20px";>';
//       html+= '<button onclick="editItem('+i+')" type="submit" style="margin-right:20px;background-color:green";>Edit</button>';
//       html+= '<button onclick="deleteItem('+i+')" type="submit" style="margin-right:20px;background-color:red";>Delete</button>';
//       html += '</div>';
//       outputElement.innerHTML += html;
//     }
//   } 

function displayData() {
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = '';
  
    for (var i = 0; i < array1.length; i++) {
      var html = '<div style="margin-top:10px">';
      html+= '<input type="checkbox" style="margin-right:5px" id="checkbox'+i+'">';
      html += '<input type="text" value="' + array1[i].fname + '" id="displayfname' + i + '" readonly style="margin-right:10px";>';
      html += '<input type="text" value="' + array1[i].lname + '" id="displaylname' + i + '" readonly style="margin-right:20px";>';
      html += '<button onclick="enableEdit(' + i + ')" type="submit" style="margin-right:20px;background-color:green";>Edit</button>';
      html += '<button onclick="deleteItem(' + i + ')" type="submit" style="margin-right:20px;background-color:red";>Delete</button>';
      html += '</div>';
      outputElement.innerHTML += html;
    }
  }


  function enableEdit(index){
    var fnameInput = document.getElementById("displayfname"+index);
    var lnameInput = document.getElementById("displaylname"+index);
    fnameInput.removeAttribute('readonly');
    lnameInput.removeAttribute('readonly');

    if(document.getElementById("saveButton"+index)==null){

    
    var saveButton = document.createElement('button');
    saveButton.id = 'saveButton'+index;
    saveButton.innerText = 'Save';
    saveButton.style.backgroundColor = 'blue';
    saveButton.onclick = function(){
        saveChanges(index);
    }
    var parentDiv = fnameInput.parentNode;
    parentDiv.appendChild(saveButton);
}

  }

  function saveChanges(id){
    var fnameInput = document.getElementById('displayfname'+id);
    var lnameInput = document.getElementById('displaylname'+id);

    var updatedFirstName = fnameInput.value;
    var updatedLastName = lnameInput.value;

    if(updatedFirstName == ''|| updatedLastName==''){
        return;
    }

    array1[id].fname = updatedFirstName;

    array1[id].lname = updatedLastName;

        fnameInput.setAttribute('readonly', true);
    lnameInput.setAttribute('readonly', true);
  
    var editButton = document.getElementById('saveButton' + id);
    editButton.parentNode.removeChild(editButton);
  }



function customDelete(){
    deleteIndexArray = []
    let j;
    for(j=0;j<array1.length;j++){
        if(document.getElementById("checkbox"+j).checked){
            console.log(document.getElementById("checkbox"+j))
            
           deleteIndexArray.push(j);
        //    array1.splice(j,1);
        // //    j=j-1;
        //    console.log(array1.length);
           
        }
        
        
    }
    console.log(deleteIndexArray);

    for(j=deleteIndexArray.length-1;j>=0;j--){
        array1.splice(deleteIndexArray[j],1);
      //  deleteIndexArray.splice(j,1);
    }
    displayData();
    if(document.getElementById('selectAll').checked){
    let checkbox = document.getElementById('selectAll');
    checkbox.checked = false;
    }
}


function deleteAll(){
  let i;
  for(i=0;i<array1.length;i++){
    var checkbox = document.getElementById("checkbox" + i);
    checkbox.checked = true;
  }

  
}

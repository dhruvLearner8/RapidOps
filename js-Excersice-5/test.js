var valueArray = []

function addValue(){
    
    var value = document.getElementById('input2').value;
    
    if(value.length>0){
        valueArray.push(value);
        getArrayValues();
    }
    else{
        return;
    }

    
   


}


function getArrayValues(){
    
    if(valueArray.length == 0){
        return;
    }
    
    ul = document.getElementById("list1");
    ul.textContent = '';

    let i;
    for(i=0;i<valueArray.length;i++){
        var parentLi = document.createElement('li');

        
     //   parentLi.textContent = valueArray[i];
       // parentLi.id = 'valueArray'+i;

       var childLi = document.createElement('li');
       childLi.textContent = valueArray[i];

        var removeButton = document.createElement('button');
        removeButton.textContent ="remove";
        removeButton.id = "removeButton"+i;


        removeButton.onclick =function(ig){
          //  console.log(this);
            let index = ig.target.id;
            console.log(index);
            deleteItem(index);
        } 
        removeButton.type = 'submit';

        parentLi.appendChild(childLi);
        parentLi.appendChild(removeButton);


        ul.appendChild(parentLi);
       // ul.appendChild(removeButton);
    }
}


function deleteItem(index){
    let ind = index.charAt(index.length-1);


    valueArray.splice(ind,1);
    getArrayValues();
    console.log(valueArray);
}
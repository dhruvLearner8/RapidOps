
var box1ClickCount =0;

var fordward = true;

function reverseColors(){
    fordward = false;
}

function fordwardColors(){
    fordward = true;
}

function showAlert(){
    alert("click me");
    showBoxes();
}


function showBoxes(){
   

      let box3 = document.createElement('div');
      box3.textContent = '3';
      box3.className = 'box';
      box3.id = 3;
      document.getElementById('container').appendChild(box3);

      let box1 = document.createElement('div');
      box1.textContent = '1  click me first';
      box1.className = 'box';
      var index = 0;
      var index2 =0;
      box1.addEventListener('click',function(){
        box1ClickCount++;
        if(box1ClickCount ===1 ){
            setInterval(() => changeColorBox2(index++,fordward), 3000);
        }
        if(box1ClickCount === 2){
            console.log("box 3 clicked");
            box3 = document.getElementById(3);
            box3.textContent = '3 oops';
            setInterval(()=> changeColorBox4(index2++,fordward),5000);
        }
        
        
    
      })
      box1.id = 1;
      document.getElementById('container').appendChild(box1);

    
    
      let div = document.createElement('div');
      document.getElementById('container').appendChild(div);
      
      let box2 = document.createElement('div');
      box2.textContent = '2';
      box2.className = 'box';
      box2.id = 2;
      document.getElementById('container').appendChild(box2);

      let box4 = document.createElement('div');
      box4.textContent = '4';
      box4.className = 'box';
      box4.id = 4;
      document.getElementById('container').appendChild(box4);

}


function changeColorBox2(index,fordward){
    console.log(index);
    colorArray = ['green','blue','red'];
    box2 = document.getElementById(2);
    if(fordward){
        box2.style.backgroundColor = colorArray[index%3];
    }
    else{
        box2.style.backgroundColor = colorArray[2-index%3];
    }
    

}

function changeColorBox4(index,fordward){
    colorArray = ['yellow','violet','purple','black','orange'];
    box4 = document.getElementById(4);
   

    if(fordward){
        box4.style.backgroundColor = colorArray[index%5];
    }
    else{
        box4.style.backgroundColor = colorArray[4-index%5];
    }
}
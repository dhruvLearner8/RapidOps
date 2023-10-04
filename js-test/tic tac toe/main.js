function calculate(id){
    
    if(clickCount%2==0){
        let row = Math.trunc(id/3);
        let column = id%3;
        if(arr1[row][column] === -1)
        {
            
            arr1[row][column] = 0;
            let buttonId = document.getElementById(id);
            buttonId.textContent = 0;
            
        setTimeout(()=>{
            if(arr1[row][0] === 0 && arr1[row][1]===0){
                if(arr1[row][2] === 0){
                    alert("1st player won");
                    resetArray();
                }
            }
    
            if(arr1[0][column]===0 && arr1[1][column]===0){
                if(arr1[2][column]===0){
                    alert("1st player won");
                    resetArray();
                }
            }
    
            if(arr1[0][0]===0 && arr1[1][1]===0){
                if(arr1[2][2]===0){
                    alert("1st player won");
                    resetArray();
                }
            }
    
            if(arr1[0][2]===0 && arr1[1][1]===0){
                if(arr1[2][0]===0){
                    alert("1st player won");
                    resetArray();
                }
            }
        },0);
    }
        
    }

    else{
        let row = Math.trunc(id/3);
        let column = id%3;
        if(arr1[row][column] === -1)
        {
            arr1[row][column] = 1;
            let buttonId = document.getElementById(id);
            buttonId.textContent = 1;
            
            setTimeout(()=>{
                if(arr1[row][0] === 1 && arr1[row][1]===1){
                    if(arr1[row][2] === 1){
                        alert("2nd player won");
                        resetArray();
                    }
                }
        
                if(arr1[0][column]===1 && arr1[1][column]===1){
                    if(arr1[2][column]===1){
                        alert("2nd player won");
                        resetArray();
                    }
                }
        
                if(arr1[0][0]===1 && arr1[1][1]===1){
                    if(arr1[2][2]===1){
                        alert("2nd player won");
                        resetArray();
                    }
                }
        
                if(arr1[0][2]===1 && arr1[1][1]===1){
                    if(arr1[2][0]===1){
                        alert("2nd player won");
                        resetArray();
                    }
                }
            },0);

        }
    }


    clickCount++;
    
    
}

function resetArray(){
    let count = 0;
    clickCount =0;
    for(let i=0;i<3;i++){

        for(let j=0;j<3;j++){
            let id = document.getElementById(count);
            id.textContent = "";
            count++;
            arr1[i][j]= -1;
        }
    }
}


var arr1 = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];

var clickCount=0;

console.log(arr1);
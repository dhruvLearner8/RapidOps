// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​frequent​ ​ item​ ​ of​ ​ an​ ​ array.

// static_array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9]
// Output = 5




let static_array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9,0,0,1,2,1,1,3,1]
let max_count =0;
let mostFrequent = static_array[0];

let i;
let j;
let arrayLength = static_array.length;
for(i=0;i<arrayLength;i++){
 let currentNumber = static_array[i];
 let tempCount = 0;
 for(j=0;j<arrayLength;j++){
     if(static_array[j]==currentNumber){
         tempCount = tempCount+1;
     }
 }
 if(tempCount>max_count){
     max_count = tempCount;
     mostFrequent = currentNumber;
 }
}

console.log(mostFrequent);
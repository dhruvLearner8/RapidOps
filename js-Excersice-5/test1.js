var array1 = [1,1,1,2,3,3,7,7,6]
var i;
var array2 = []
for(i=0;i<array1.length-1;i++){
    if(array1[i]!=array1[i+1]){
        array2.push(array1[i]);
    }
}

array2.push(array1[i]);

console.log(array2);
 
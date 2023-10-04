let arr1 = [1,4,2,77,33,23,6,57];

console.log(Number.MAX_VALUE);

for(let i=0;i<arr1.length;i++){
    let min = Number.MAX_VALUE;
    let temp =-1;
    for(let j=i;j<arr1.length;j++){
        if(arr1[j]<min){
            min = arr1[j];
            temp =j;
        }
    }
    if(temp!=-1){
        arr1[temp] = arr1[i];
        arr1[i] = min;
    }
   
}

console.log(arr1);
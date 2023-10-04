
// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, and intersection of two arrays.

// array_a = [0,1,2,3] , array_b = [3,4,5]
// Output = union_array : [0,1,2,3,4,5] , a-b_array = [0,1,2], b-a_array = [4,5], intersection_array = [3]


let array_a = [0,1,2,3]
let array_b = [3,4,5]

let union_array = []

let i;
let j;

// Union Concept

for(i=0;i<array_a.length;i++){
    union_array.push(array_a[i]);
}

for(i=0;i<array_b.length;i++){

    union_array.push(array_b[i]);
    
}

let union_array_2 = []
for(i=0;i<union_array.length;i++){
    if(union_array[i] != union_array[i+1]){
        union_array_2.push(union_array[i]);
    }
}

console.log(union_array_2);

// a-b array
let intersection_array = [];

let differece_array = [0,1,2,3];

for(i=0;i<differece_array.length;i++){
    let currentNumber = differece_array[i];
    for(j=0;j<array_b.length;j++){
        if(currentNumber == array_b[j]){
            differece_array.pop();
            intersection_array.push(currentNumber);
            break;
        }
    }
    
}

console.log(differece_array);

console.log(intersection_array);



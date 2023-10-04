
// Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ unauthorized​ ​ user. The number of star will be equal to the number of characters hidden, and make this program dynamic.

// Input : abcdef@mail.com
// Output :  ab***f@mail.com​ 


let str1 = '';

let inputString = 'abcdeggddhgjf@gmail.com';

let endString = inputString.match(/@[a-z0-9]*/)[0];


let str2 = inputString.match(/[a-z0-9]*/)[0];


let starCount = str2.length - 3;

for(let i = 0;i<str2.length;i++){

    if(i>=2 && i<str2.length-1){
        str1 = str1+'*';
    
    }
    else{
        str1 = str1+str2[i];
    }
    
}

str1 = str1+endString;

console.log(str1);
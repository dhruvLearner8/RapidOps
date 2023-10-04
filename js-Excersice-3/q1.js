let str1 = 'abcdeeeee@gmail.com';

let regexp = /[a-z0-9]*\w\w\w\w\w+[a-z0-9]*@gmail.com/
console.log(str1.match(regexp));
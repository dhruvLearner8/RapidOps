// Write​ ​ a ​ ​ JavaScript​ ​function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).

// static_string = "This is a sample string"
// input_string = "Insert me"
// input_position = 3
// Output : "ThInsert meis a sample string"

// by using slice method
let static_string = "This is a sample string";
let input_string = "Inser me";
let input_position = 3;

let str1 = static_string.slice(0,input_position)+input_string+static_string.slice(input_position);
console.log(str1);



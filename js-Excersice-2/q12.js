// Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.

// input_length = 2
// input_string = "RapidOpsSolution"
// console.log(string_chop('RapidOpsSolution’',2));
// Output = ["Ra",​ ​ "pi",​ ​ "dO",​ ​ "ps",​ ​ "So",​ ​ ”lu”,​ ​ “ti”,​ ​ “on”]





function string_chop(input_string,input_length){
    let array1 = [];
    let i;
    for(i=0;i<input_string.length;){
        let str1='';
        for(j=0;j<2;j++){
            str1=str1+input_string[i];
            i++;
        }
        array1.push(str1);
    }
    return array1;
}


let input_string = "RapidOpsSolutions";
let input_length = 2;
console.log(string_chop(input_string,input_length));
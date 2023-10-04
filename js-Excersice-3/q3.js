// Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.

// Input : '<p><strong><em>Javascript​ ​ Exercises</em></strong></p>'
// Output : Javascript​ Exercises


let str1 = '<p><strong><em>Javascript Exercises</em></strong></p>'
 console.log(str1);


 let regexp = /<[/?a-z]*>/ig;


 let str2  = str1.replace(regexp,'')

 console.log(str2);
 //console.log(str1.match(regexp));


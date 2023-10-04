let num=7;
let i;

for(i=0;i<num;i++){
    let str1 = '*';
    if(i<num/2){
        for(let j=0;j<i;j++){
            str1 = str1+'*';
        }
    }
    else{
        for(let j=0;j<num-i-1;j++){
            str1 = str1+'*';
        }
    }
    console.log(str1);
    console.log("\n");
}

let num =6;
let i;

for(i=0;i<=num-1;i++){
    let str1 = '';
    for(j=0;j<=num-1;j++){
        if(j==i || j==num-i-1){
            
            str1 = str1+'*';
        }
        else{
            str1=str1+' ';
        }
    }
    console.log(str1);
    console.log("\n");
}
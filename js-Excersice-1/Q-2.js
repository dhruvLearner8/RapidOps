
let num =7;
let i ;
for(i=0;i<num;i++){
    let str1 ='';
    for(j=0;j<num;j++){
        if(i==0 ||i==num-1){
         //   console.log('*');
         str1 = str1+'*';
        }
        else if(j==0 || j== num-1){
           // console.log('*');
            str1 = str1+'*';
        }
        else{
            str1 = str1+' ';
        }
    }
    console.log(str1);
   console.log('\n');
}
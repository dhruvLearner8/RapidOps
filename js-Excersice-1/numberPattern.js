let num = 6;
let i;
let j;

for(i=1;i<=num;i++){
    let str1 = '';
    if(i>1){
        let spaceCount = i;
        for(spaceCount=1;spaceCount<i;spaceCount++){
            str1 = str1+' ';
        }
    }
    for(j=i;j<=num;j++){
        
        str1 = str1+j+' ';
    }

    console.log(str1);
    console.log("\n");
}

for(i=1;i<num;i++){
    
    let str1 = '';
    for(let spaceCount=1;spaceCount<num-i;spaceCount++){
        str1 = str1+' ';

    }
    for(j=num-i;j<=num;j++){
        str1 = str1+j+' ';
    }
    console.log(str1);
    console.log("\n");
}
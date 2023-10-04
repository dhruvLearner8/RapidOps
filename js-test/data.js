var obj = {
    obj1:  {
        productName : "a",
        productType :"a1",
        price: 1
    },

    obj2 : {
        productName : "b",
        productType :"a2",
        price : 2
    },
    obj3 : {
        productName: "c",
        productType : "a1",
        price : 5
    },
    obj4 : {
        productName:"d",
        productType : "a2",
        price:3
    },
    obj5 : {
        productName : "e",
        productType : "a3",
        price:7
    },
    obj6:{
        productName : "f",
        productType : "a1",
        price : 10,
    }   
}

var finalObject = {

};

var set = new Set();


for(let value of Object.values(obj)){
    // console.log(value.productType);
    set.add(value.productType);

}

// console.log(set);

for(let type of set){
    let price =0;
    let occurance = 0;
    for(let value of Object.values(obj)){
        if(value.productType === type){
            price = price+value.price;
            occurance = occurance+1;
        }

    }

    console.log(type ,price , occurance );

    let table = document.getElementById("table");
    let tr = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.textContent = type;

    let th2 = document.createElement("th");
    th2.textContent = price;

    let th3 = document.createElement("th");
    th3.textContent = occurance;

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    table.appendChild(tr);
}


 
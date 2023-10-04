// Write​ ​ a ​ ​ JavaScript​ ​ program ​ that​ ​ displays​ ​ a list​ ​ of​ ​ names​ ​ according​ ​ to​ ​ the sports​ group.




// [{

//   Name:​ ​ 'Ravindra',

//   Sports: ['Chess', 'Cricket'],

//   },

// {

//   Name:​ ​ 'Ravi',

//   Sports: ['Cricket', 'Football'],

// },

// {

//   Name:​ ​ 'Rishabh',

//   Sports: ['Table-Tennis', 'Football'],

// },]

// NOTE: ​ ​ array​ ​ has​ ​ ​ 2 ​ ​ objects,​ ​ and​ ​ all​ ​ objects​ ​have​ ​ a minimum​ ​ of 1 ​ ​ sport.
// Expected​ ​ output​ :
// [{ Chess:​ ​ [‘Ravindra’] }, { Cricket:​ [‘Ravindra’,'Ravi'] }, { Football:​ ​ [‘Ravi’,​ ​ ‘Rishabh’] }, { Table-Tennis:​ ​ [‘Rishabh']}]




let arr1 = [
    {
        Name: 'Ravindra',
        Sports: ['Chess','Cricket']
    },
    {
        Name:'Ravi',
        Sports:['Cricket','Football']
    },
    {
        Name:'Rishabh',
        Sports: ['Table-Tennis','Football']
    },{
        Name: 'Dhruv',
        Sports:['volleyball','Cricket']
    }
]
  

const set1 = new Set();

 

  
  for(let x of arr1){
    for(let sport of x.Sports){
        set1.add(sport);
    }
  }

 // console.log(set1);

const map1=new Map();

for(let x of set1){
    let arr2 = [];
    for(let y of arr1){
        
        for(let sport of y.Sports){
           // console.log(sport);
            if(x == sport){
                arr2.push(y.Name);
               // map1.set(x,arr2.push(y.Name));
            }
        }
    }
    map1.set(x,arr2);
   
}

console.log(map1);



// console.log(testMap);
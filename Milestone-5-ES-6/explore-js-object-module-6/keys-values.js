// keys , values, delete , entries, seal, freeze s

// keys --------------
const bottle = {color: 'yellow', price: 50, capacity: 1, isCleaned: true};
const keys = Object.keys(bottle);
// console.log(keys);
//output: [ 'color', 'price', 'capacity', 'isCleaned' ]

// values ---------------------
const values = Object.values(bottle);
// console.log(values);
//[ 'yellow', 50, 1, true ]

// entries ------------------
const pair = Object.entries(bottle);
// console.log(pair);
// output: 
// [
//     [ 'color', 'yellow' ],
//     [ 'price', 50 ],
//     [ 'capacity', 1 ],
//     [ 'isCleaned', true ]
// ]


//Two dimensional array 
const towDimension = [ [ 'color', 'yellow' ],  [ 'price', 50 ], [ 'capacity', 1 ], [ 'isCleaned', true ] ] ;

    
// delete -------------------
// console.log(bottle);
// output: { color: 'yellow', price: 50, capacity: 1, isCleaned: true }

// seal korla kono kisu delete kora jai na , add kora jai change kora jai------------------------
// Object.seal(bottle);
// freeze korla somat bada kono kisu kora jai nai----------------------------
// Object.freeze(bottle);
delete bottle.isCleaned;
console.log(bottle);
// output; { color: 'yellow', price: 50, capacity: 1 }
   
   
  

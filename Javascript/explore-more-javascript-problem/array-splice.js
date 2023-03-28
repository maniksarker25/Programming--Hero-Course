const friends = [23, 33, 43, 12, 21, 53, 51, 55, 64, 32, 11];
// Removes elements from an array and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the orginal array 
const partial = friends.splice(2,5);
console.log(partial);

//output: [ 43, 12, 21, 53, 51 ]

console.log(friends);
//output: [ 23, 33, 55, 64, 32, 11 ]



//
const peoples = [33, 2, 43, 53, 52, 55, 63, 56];
// you can splice and insert element in same time 
const partialPeople = peoples.splice(3,3,999, 333);
console.log(partialPeople);
//output: [ 53, 52, 55 ]
console.log(peoples);
//output:
// [
//     33,  2, 43, 999,
//    333, 63, 56
//  ]

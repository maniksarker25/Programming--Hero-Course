const friends = [23, 33, 43, 12, 21, 53, 51, 55, 64, 32, 11];
// Returns a copy of a section of an array. For both start and end,
//  a negative index can be used to indicate an offset from the end of the array. 
//  For example, -2 refers to the second to last element of the array.
const partial = friends.slice(2,5);
console.log(partial);
// output: [ 43, 12, 21 ]

console.log(friends);

// don,t changes the array 

// [
//     23, 33, 43, 12, 21,
//     53, 51, 55, 64, 32,
//     11
//   ]

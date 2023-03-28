// spread operator ...
const max = Math.max(34, 35, 53, 222, 33);
// console.log(max);
// output: 222

const numbers = [34, 35, 63, 333, 53, 666, 33];
// console.log(numbers);
//output: 
// [
//   34,  35, 63, 333,
//   53, 666, 33]
// important ------------------------------------------
// console.log(...numbers);
//output: 34 35 63 333 53 666 33
// const largest = Math.max(numbers);
// console.log(largest);
// output: nan 

// important ---------------------------------------
const largest = Math.max(...numbers);
console.log(largest);
// output: 666


// -------------------------------
const numbers2 = [34, 53, 65, 64];
const numbers3 = numbers2;
// console.log(numbers3);
// output: [ 34, 53, 65, 64 ]
numbers2.push(45);
// console.log(numbers3);
// output: [ 34, 53, 65, 64, 45 ]
numbers3.push(666);
// console.log(numbers3);
// output: [ 34, 53, 65, 64, 45, 666 ]
const numbers4 = [numbers2];
numbers4.push(333);

// console.log(numbers4);
// output: [ [ 34, 53, 65, 64, 45, 666 ], 333 ]
const numbers5 = [...numbers2];
numbers5.push(433);
// console.log(numbers5);
// output: 
// [
//   34,  53,  65, 64,
//   45, 666, 433
// ]
// console.log(numbers2);
// output: [ 34, 53, 65, 64, 45, 666 ]


// you can also do it 
const numbers6 = [34, 54, ...numbers2, 88, 99];
console.log(numbers6);
// [
//     34, 54,  34, 53, 65,
//     64, 45, 666, 88, 99
//   ]
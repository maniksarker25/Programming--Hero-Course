let first = 5;
let second = 7;
console.log(first,second);
// output: 5 7



// try to change value (that wrong approach) 
first = second;
second = first;
console.log(first,second)
//output: 7 7



// try to valid way temp approach 1
let num1 = 5;
let num2 = 7;
const temp = num1;
num1 = num2;
num2 = temp;
console.log(num1,num2);
// output: 7 5


// approach 2: destructuring
let first1 =5;
let second1 = 7;

[first1,second1] = [second1,first1];
console.log(first1,second1);
// output: 7 5
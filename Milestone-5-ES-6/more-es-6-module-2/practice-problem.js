const numbers = [1, 3, 5, 7 ]
const doubleNumbers = numbers.map(x => x * 2);
// console.log(doubleNumbers);
// output; [ 2, 6, 10, 14 ]
const newNumbers = [];
for(number of numbers){
    const num = number * 2;
    newNumbers.push(num);
   
}
// console.log(newNumbers); 
// output: [ 2, 6, 10, 14 ]

const number2 = [34, 30, 40, 530, 54];
const newNumber2 = number2.filter(x => x % 10 == 0);
// console.log(newNumber2)
// output: [ 30, 40, 530 ]

const array = [3, 4, 2, 6, 4];
const sum = array.reduce((sum, number) => sum + number,0);
// console.log(sum);
// output; 19

const people = [
    {name:'manik', age: 20},
    {name:'raju', age: 25},
    {name:'setu', age:10}
];
 const sumAge = people.reduce((sum, man) => sum + man.age,0);
 console.log(sumAge);
 // output:55

//breakup with var 
// no more use var
// let : it to reassign
// const : it not to reassign
let money = 25;
money = 65;
console.log(money);
// output: 65

// CONST 
const bird = 'Sona pakhi';
// bird = 'Moina pakhi';
// you can do it 
const message = bird + 'potas potas';
// console.log(message);
// output: sona pakhi potas potas 
// console.log(bird);
// output: type error: assignment to constant variable

// 

const numbers = [54,35,34,53];
// numbers = [34, 34, 23, 53,];---you can not do it 
numbers.push(458);
// you can do it 
console.log(numbers);
//output: [ 54, 35, 34, 53, 458 ]

// 
const student = {
    namne: 'manik sarker',
    address: 'bogra rajshahi'
}
/* you can not do that
student = {
    name:'manik chandra sarker'
} */

// const




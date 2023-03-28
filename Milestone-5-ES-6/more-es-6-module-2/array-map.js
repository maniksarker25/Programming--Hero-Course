// Old way ------------
/* purpose:
1.get an araay 
2. for every elements of the array do something 
3. store the result in an array 
4.return the result array 

*/

/* const numbers = [1,2,3,4,5];
function getDoubles(numbers){
    const output = [];
    for(number of numbers){
        const doubled = makeDouble(number);
        output.push(doubled);
    }
    return output;
}
const makeDouble = num => num * 2;
const result = getDoubles(numbers);
console.log(result)
output: [ 2, 4, 6, 8, 10 ] */


// shortcut way ---Array map --------------------
numbers = [2,4,6,8]
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
// [ 4, 8, 12, 16 ]
const directTriple = numbers.map(num => num * 3)
console.log(directTriple);
// output:[ 6, 12, 18, 24 ]

const makeFive = [2,3,4].map(x => x * 5);
console.log(makeFive);
// output: [ 10, 15, 20 ]







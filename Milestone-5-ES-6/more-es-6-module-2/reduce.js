// reduce: (accumulatorFunction, initial value)
//accumulator function use two parameter

const numbers = [3, 4, 3, 2, 4];
const total = numbers.reduce((sum , number) => sum + number,0);
// 0 hossa sum a default value ata dita hoi 
console.log(total);
// output: 16
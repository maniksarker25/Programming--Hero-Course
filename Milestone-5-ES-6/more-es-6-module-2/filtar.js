const numbers = [35, 53, 33, 53, 66, 45, 77, 888, 65 ,3];
const bigNumbers = numbers.filter(number => number > 50);
console.log(bigNumbers);
// output: [ 53, 53, 66, 77, 888, 65 ]
const tiny = numbers.filter(number => number < 50);
console.log(tiny);
// output: [ 35, 33, 45, 3 ]
const even = numbers.filter(n => n % 2 === 0);
console.log(even);
// output: [ 66, 888 ]
const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:23000},
    {id:4, name:'tablet', price:40000},

]

const lowPriceProducts = products.filter(product => product.price < 40000);
console.log(lowPriceProducts);
// output; [ { id: 3, name: 'watch', price: 23000 } ]

// find : its return just first element of find 


const numbers = [ 12, 5, 15, 25, 54, 45];
const fives = numbers.find(n => n % 5 === 0);
console.log(fives);
// output: 5

const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:36000},
    {id:3, name:'watch', price:23000},
    {id:4, name:'tablet', price:40000},

]
const cheap = products.find( product => product.price < 40000);
console.log(cheap);
// output: { id: 2, name: 'mobile', price: 36000 }
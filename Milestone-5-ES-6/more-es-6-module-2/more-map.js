const friends = ['raju', 'taufic', 'setu', 'hasib'];
const firstLetter = friends.map(firend => firend[0]);
console.log(firstLetter);
// output: [ 'r', 't', 's', 'h' ]
const nameLength = friends.map(friend => friend.length);
console.log(nameLength);
// output: [ 4, 6, 4, 5 ]

// 
const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:23000},
    {id:4, name:'tablet', price:40000},

]
const productName = products.map(product => product.name);
console.log(productName);
// output: [ 4, 6, 4, 5 ]
const prices = products.map(p => p.price);
console.log(prices);
// output: [ 45000, 80000, 23000, 40000 ]
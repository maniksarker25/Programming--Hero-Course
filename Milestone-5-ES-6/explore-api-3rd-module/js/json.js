// JSON -- Javascript Object Notation (JSON)

const user = {id:1, name:'sakib', job:'actor'};
const stringified = JSON.stringify(user);
console.log(user);
// { id: 1, name: 'sakib', job: 'actor' }--------------normal js
console.log(stringified);
// {"id":1,"name":"sakib","job":"actor"}----------JSON 


// another example 
const shop = {
    owner: 'Alia',
    address:{
        street:'gulisthan new market',
        city:'dhaka',
        country: 'bangladesh'
    },
    products:['laptop', 'mobile', 'monitor', 'mic'],
    revenue:45000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
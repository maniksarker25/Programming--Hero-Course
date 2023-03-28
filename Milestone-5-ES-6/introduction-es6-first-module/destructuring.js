const fish = {
    name: 'hilsa',
    address: 'chandpur',
    price: 4000,
    phone: '0174353434'
}
// normal way--------------------
const phone = fish.phone;
const address = fish.address;
// console.log(phone);
// output: 0174353434
// console.log(address);
// output: chandpur

// object destructuring --------------------------
const student = {
    name: 'manik sarker',
    address1: 'jessore',
    phone1: '01775770439'
}

const {name} = student;
const {address1, phone1} = student;
console.log(name);
// output: manik sarker
console.log(address1);
// output: jessore


// array destructuring -----------------
const [first,another] = [45, 35, 34];
console.log(first,another);
// output: 45 35
const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(king);
// output: sakib
console.log(notun);
// output: raj




// 1.Create object with object literals--------------------
const player = {};
player.name = 'messi';
player.specialty = 'dribling';
player.ball = function(){
    console.log('swing your ball')
}
// console.log(player);
// player.ball();

// 
const student = {
    name: 'Hamid',
    id:15422,
    write: function(){
        console.log('write a paragraph')
    }
}
// console.log(student);

//NO:2 object constructor------------------

const person = new Object();
// console.log(person)

// RAte this important ------------------------------------------------
// NO:3  object create method
const item = Object.create(null);
// console.log(item);
// output; [Object: null prototype] {}
const newStudent = Object.create(student);
// console.log(newStudent);
// output: {}

// console.log(newStudent.name);
// output:Hamid

// console.log(newStudent.job);
// output; undefined

// 4. Class ----------------------

class Person{
    name = 'abul';
    address = 'Dhaka';
    constructor(age){
        this.age = age;

    }
}

const person1 = new Person(56);
// console.log(person1);
// output; Person { name: 'abul', address: 'Dhaka', age: 56 }

// make object to use function --- we will not use it -----

function car(model, price){
    this.model = model;
    this.price = price;
}
const tasla = new car('elon', 250000);
// console.log(tasla);
// output; car { model: 'elon', price: 250000 }


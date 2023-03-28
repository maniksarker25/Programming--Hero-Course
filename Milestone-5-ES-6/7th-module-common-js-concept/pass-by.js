// primitive type a function ar modda value change korla bairar scope a change hoi na 
// no primitive type ar function ar modda value change koral baira change hoi

//primitive----------------------------------------
// primitive type ar pass by value----
let num1 = 5;
let num2 = 4;
function multiply(a,b){
    a = 10
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
// console.log(output);
// output: 40]

// console.log(num1);
// output: 5


// non primitive ---------------------------
// no primitive type ar pass by reference------
let student1 = {name:'raju', partner:'borsa'};
let student2 = {name: 'satu', partner: 'shamima'};
function makeMovie(couple1, couple2){
    couple1.name = 'hasib';
    couple2.partner = 'shammi';
}
console.log(student1,student2);
// output: { name: 'raju', partner: 'borsa' } { name: 'satu', partner: 'shamima' }
makeMovie(student1,student2);

// console.log(student1,student2);
// output: { name: 'hasib', partner: 'borsa' } { name: 'satu', partner: 'shammi' }-=-----------------
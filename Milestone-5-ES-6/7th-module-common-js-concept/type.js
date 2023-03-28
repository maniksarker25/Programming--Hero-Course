// strong type programming language 
// int a = 30;
// string name = 'manik';
// Boolean isLoad = true;
// object student = {name: 'manik', roll: 35};


// javascript is a dynamic type programming language 

// primitive type----------------- 
const a = 20;
const b = 'we are not same brother';
const c = true;


// no primitive type --------------
const ages = [30, 32, 23, 43, 23];
const student = {name: 'raju', roll: 54};



// 
// console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);
// output: number string boolean object object

// primitive 
let x = 5;
let y = 5;
// console.log(x,y);
// output; 5 5
y = 7;
// console.log(x,y);
// output; 5 7

// non primitive 
let p = {job: 'web developer'};
let q = p;
// console.log(p,q);
// output; { job: 'web developer' } { job: 'web developer' }
q.job = 'font end developer';
// console.log(p,q);
// output; { job: 'font end developer' } { job: 'font end developer' }

q = {job: 'backend developer'};
console.log(p,q);
// output: { job: 'font end developer' } { job: 'backend developer' }
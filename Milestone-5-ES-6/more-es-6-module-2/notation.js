const student = { 
    id: 01,
    name: 'ratul',
    marks: {
        math: 58,
        physics: 45,
        chemistry: 87
    }
}
const math = student.marks.math;
console.log(math);
// output: 58
const physics = student['marks']['physics'];
console.log(physics);
// output: 45
const subject = 'chemistry';
// const chemistry = student.math.subject;------wrong 
// console.log(chemistry);
// output: error asba
const chemistry = student.marks[subject];
console.log(chemistry);
// output: 87

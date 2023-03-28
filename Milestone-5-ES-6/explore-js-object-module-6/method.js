const student = {
    name: 'Hasan ali',
    money: 5000,
    study: 'math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + "is participating an exam";
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name}  is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips ;
        return this.money;
    }

}
const output = student.exam();
// console.log(output);
// output; Hasan aliis participating an exam


const reExam = student.improveExam('algebra');
// console.log(reExam);
// output: Hasan ali  is taking improvement exam on algebra


const remainingMoney = student.treatDay(900, 100);
// console.log(remainingMoney);
// output:4000

// dola dia aro taka nauar por funny --
const dolaRemaining = student.treatDay(500, 200);
// console.log(dolaRemaining);
// output; 3300
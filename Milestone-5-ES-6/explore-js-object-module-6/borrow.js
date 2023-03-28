const kodomAli = {
    name: 'Kodom ali',
    money: 5000,
    study: 'math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + " is participating an exam";
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name}  is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }

}
const result = kodomAli.exam();
// console.log(result);
// output: Kodom ali is participating an exam

const badamAli = {
    name: 'kasa badam',
    money: 8000
}
const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);
// output: kasa badam is participating an exam

const badamMoney = kodomAli.treatDay.call(badamAli,400, 50);
// console.log(badamMoney);
// output: 7550

// another way --------- apply 
const badamMoney2 = kodomAli.treatDay.apply(badamAli,[1000, 100]);
// console.log(badamMoney2);
// output: 6450

// another way ----- bind ------------
const badamAliTreat = kodomAli.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 500);
console.log(remaining);
// output: 4950
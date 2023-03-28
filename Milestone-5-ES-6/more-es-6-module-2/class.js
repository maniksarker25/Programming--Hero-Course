// syntactic sugar 
// class keyword . class name first letter uppercase hba

class Instructor{
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    // make a function its name must constructor---- for define name and location
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSeason(time){
        console.log(`start the support season at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }

}

const giasUddin = new Instructor();
console.log(giasUddin);
// output: 
// Instructor {
//     name: undefined,
//     designation: 'web course instructor',
//     team: 'web team',
//     location: undefined
//   }
giasUddin.startSupportSeason('9.30pm');
giasUddin.createQuiz(60);

/* start the support season at 9.30pm
Please create quiz for module 60 */

//
const amir = new Instructor('amir','mumbai');
console.log(amir);
// output: 
// Instructor {
//     name: 'amir',
//     designation: 'web course instructor',
//     team: 'web team',
//     location: 'mumbai'
//   }

const solaiman = new Instructor('solaiman', 'Dhaka')
console.log(solaiman);
// output: 
// Instructor {
//     name: 'solaiman',
//     designation: 'web course instructor',
//     team: 'web team',
//     location: 'Dhaka'
//   }
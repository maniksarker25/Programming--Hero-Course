// common class
class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;

    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    }
}


// instructor 
class Instructor extends TeamMember{
    designation = 'web course instructor'
    team = 'web team'
    // make a function its name must constructor---- for define name and location
    constructor(name, location){
        super(name,location);
    }
    startSupportSeason(time){
        console.log(`start the support season at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
   
}

// developer 
class Developer extends TeamMember{
    designation = 'web course instructor'
    team = 'web team'
    tech;
    // make a function its name must constructor---- for define name and location
    constructor(name, location,tech){
        super(name,location);
        this.tech = tech;
    }
    developerFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember{
    designation = 'job placement commandos'
    team = 'job placement team'
    region;
    // make a function its name must constructor---- for define name and location
    constructor(name, location,region){
        super(name,location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the version ${version}`)
    }
}

// operation
const alia = new Developer('alia','dhaka', 'react');
console.log(alia);
alia.provideFeedback();
// output: 
// Developer {
//     name: 'alia',
//     location: 'dhaka',
//     designation: 'web course instructor',
//     team: 'web team',
//     tech: 'react'
//   }
// alia thank you for your feedback.

const bipasa = new JobPlacement('bipasa', 'kolkata', 'india');
console.log(bipasa);
// output; 
// JobPlacement {
//     name: 'bipasa',
//     location: 'kolkata',
//     designation: 'job placement commandos',
//     team: 'job placement team',
//     region: 'india'
//   }
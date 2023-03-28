var friends = ["mim", "robin", "jabbar", "borkot"];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

for (var i = 0; i < friends.length; i++) {
  var element = friends[i];
  // console.log(element);
}

// ! 2 ta hat ache
// ? 2 ta chokh ache
// * 2 ta pa thake
// age 25 years old

var human = {
  name: "rahim",
  age: 25,
  friends: ["hero", "alom", "robin", "manna"],
  country: "Bangladesh",
  gf: true,
  father: {
    name: "kuddos",
  },
};

// console.log(human.father.name);

// for (var i = 0; i < human.friends.length; i++) {
//   var element = human.friends[i];
//   console.log(element);
// }

function sum(num1, num2) {
  var result = num1 + num2;
  return result;
}
function minus(num1, num2) {
  var result = num1 - num2;
  return result;
}
var totalMinus = minus(600, 400);

var totalSum = sum(1000, 2005);

const total = totalMinus + totalSum;
// console.log(total);

function writeSorry(name) {
  for (var i = 0; i < 10; i++) {
    console.log("sorry " + name);
  }
}

// writeSorry("mahim");

function kmToMiles(km) {
  const result = km * 0.62;
  return result;
}
var miles = kmToMiles(12);
// console.log(miles);

function workout(workoutName) {
  var bicepWorkout = ["cable cros", "bicep", "bicep"];
  var chestWorkout = ["chest fly", "chest press", "chest"];

  if (workoutName == "chest") {
    return chestWorkout;
  } else if (workoutName == "bicep") {
    return bicepWorkout;
  } else {
    return "dont knwo";
  }
}

var workoutPlan = workout("chest");
// console.log(workoutPlan);

var myDays = 15;

var first1To10Days = 500;
var second11To20Days = 300;
var third21ToAnyDays = 100;

if (myDays <= 10) {
  var totalCost = myDays * 500;
  console.log(totalCost);
} else if (myDays <= 20 && myDays > 10) {
  var frist10daysCost = 10 * 500;
  var remainingDys = myDays - 10;
  var totalDaysCost = remainingDys * 300;
  var total11To20DAyscost = frist10daysCost + totalDaysCost;
  console.log(total11To20DAyscost);
} else {
  var first1To10Days = 500 * 10;
  var second11To20Days = 300 * 10;
  var remainingDys = myDays - 20;
  var thirdinifinityDays = remainingDys * 100;
  var totoalAbove20DaysCost =
    first1To10Days + second11To20Days + thirdinifinityDays;
  console.log(totoalAbove20DaysCost);
}

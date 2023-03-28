// power
const result = Math.pow(2,4);
console.log(result);
// output: 16

// Gap
const num1 = 25;
const num2 = 45;
const gap = num1 - num2;
if(gap < 5){
    console.log("tumra prem korta parba")
}
else{
    console.log("tumra prem korta parba na ")
}
// Output : tumra prem korta parba (its wrong)




// ligal way gap
const age1 = 25;
const age2 = 45;
const difference = Math.abs(age1 - age2);
if(difference < 5){
    console.log("tumra prem korta parba")
}
else{
    console.log("tumra prem korta parba na ")
}
//output: tumra prem korta parba na (its correct )


//--------------------------------
//purno sonkha
const number = 6.2548;
const fullNumber = Math.round(number);
console.log(fullNumber);
//output: 6
const mark = 7.8654;
const fullMarks = Math.round(mark);
console.log(fullMarks);
//output : 8

//------------------
// boro purno shokha use ceil
const mark2 = 4.1254;
const fullmark2 = Math.ceil(mark2);
console.log(fullmark2);
output: 5;

//---------------------
//random
for(let i =0; i <20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
//output:6
// 8
// 5
// 0
// 3
// 3
// 1
// 4
// 4
// 2
// 5
// 2
// 5
// 5
// 2
// 5
// 4
// 4
// 6
// 0
// 2
// 2
// 4
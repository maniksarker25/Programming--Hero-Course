function getAverage(assignment1, assignment2, assignment3){
    var totalMarks = assignment1 + assignment2 + assignment3;
    var average = totalMarks / 3;
    return average;

}
var assignment1Marks = 60;
var assignment2Marks = 58;
var assignment3Marks = 59;
var myAverage = getAverage(assignment1Marks,assignment2Marks,assignment3Marks);
console.log(myAverage);

//output : 59
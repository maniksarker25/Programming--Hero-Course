// continue skip kora 

var numbers = [25, 48, 89, 54, 74, 69, 25, 56]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number)
}
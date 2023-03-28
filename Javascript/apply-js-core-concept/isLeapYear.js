function isLeapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return true;
    }
    else{
        return false;
    }
}
const isItLeapYear = isLeapYear(2012);
console.log(isItLeapYear);

//Output : ture
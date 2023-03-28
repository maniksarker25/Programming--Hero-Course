function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
// idjhdkjdjdiujiduiudiud

const watch1 = stopWatch();
console.log(watch1());
// output: 1]
console.log(watch1());
// output: 2
const watch2 = stopWatch();
console.log(watch2());
// output: 1
console.log(watch2());
// output: 2
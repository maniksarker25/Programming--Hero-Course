// centimeter to meter
function centimeterToMeter(centimeter){
    const meter = parseFloat((centimeter / 0.01).toFixed(3));
    return meter;
}
const meter = centimeterToMeter(14.2578);
console.log(meter);

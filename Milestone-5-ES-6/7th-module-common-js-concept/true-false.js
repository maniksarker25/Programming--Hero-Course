/* 
1.Truthy--------
1.true
2. any positive or negative number is truthy other than 0;
3. any string will be truthy other than empty string 
4. {} object will be truthy
5. [] array truthy


2.Falsy-----------
1.false
2. 0
3.'' (empty string will be falsy)
4. undefined will be falsy 
5. null will be falsy

*/

const a = false;
if(a){
    console.log('value of a is truthy')
}
else{
    console.log('value of a is falsy')
}
// output: value of a is falsy


// optional ----------------
// The way to check falsy and truthy----------
// check falsy-----------
const y = null;
if(!y){
    console.log('value is falsy')
}
// output: value is falsy

// check truthy ----------------
const x = {};
if(!!x){
    console.log('value is truthy')
}
// output; value is truthy
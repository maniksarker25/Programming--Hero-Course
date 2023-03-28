// const first = {a: 5};
// const second = {a: 5};
// if(first === second){
//     console.log('they are same')
// }
// else{
//     console.log('different')
// }
// output; different--- karon 2 ta memory ta alada jaigai asa


// dot not use this method to compare object or array ----------
/*
 
const first = {a: 5};
const second = {a: 5};

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
if(firstString === secondString){
    console.log('same')
}
else{
    console.log('different')
} 

*/
// output: same -----------------

//  advanced way -------------------------------
function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if (first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);


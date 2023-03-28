// remove duplicate and make a unique array 

const names = ['manik', 'roton', 'hasib', 'raju', 'sagor', 'manik', 'raju', 'taufic', 'hasib', 'manik'];

function removeDublicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        console.log(name);
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDublicate(names);
console.log(uniqueNames);

// output: [ 'manik', 'roton', 'hasib', 'raju', 'sagor', 'taufic' ]
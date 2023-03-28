const object = [{name: 'mahedi', age:23, date:'10/5/2015'},{name: 'manik', age:23, date:'10/5/1900'}];
const sort = (a,b) =>{
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) {
        return 1;
    } else if (dateA > dateB) {
        return -1;
    }else{
        return 0; 
    }
}
console.log(object.sort(sort));

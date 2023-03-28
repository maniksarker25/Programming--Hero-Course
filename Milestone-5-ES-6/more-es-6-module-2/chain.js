// 
const users = [{id:1,name: 'abul', job:'doctor'}];
// console.log(users.name);
// output: undefined
console.log(users[0].name);
// output: abul

// 
const data = {
    count: 5000,
    data:[
        {id:1, name:'babul', job:'leader'},
        {id:2, name:'dabul', job:'police'}
    ]
}
// print the first user profession
console.log(data.data[0].job);
// output: leader


// data chain ?????----------------------------
const user = {id:5000,
    name:'thomas',
    address:{
        street:{
            first:" 35/5 khocukhat",
            second: 'third floor',
            third: 'right side',
        },
        postOfice: 'cantonment',
        city:'dhaka'
    }
}

//chain ????
// find the floor (??) question mark use kora hoi jodi value thaka tahola dukba na hola thama jaba ;
const floor = user.address.street?.second;
console.log(floor);
// output: third floor



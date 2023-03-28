// Promise-------------------
const getData = new Promise((resolve,reject)=>{
    resolve(566);
})

getData.then(data => console.log(data + 4));
// output: 570

//
const getData2 = new Promise((resolve, reject) =>{
    reject('No data available')
})
 
getData2
.then(data => console.log(data))
.catch(err => console.log("Error:" ,err))
// output: Error: No data available


// Promise ----------
const getData3 = new Promise((resolve,reject) =>{
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        resolve(100)
    }
    else{
        reject("Data Is Not Available")
    }
})

getData3
.then(data=>console.log(data))
.catch(err=>console.log("error:", err));
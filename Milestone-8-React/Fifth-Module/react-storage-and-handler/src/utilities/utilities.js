const add = (first,second)=>{
    return first + second;
}

const multiply = (first,second)=>{
    return first * second;
}
// Reduce --------------------

// const numbers = [45,87,33, 64, 63];
// const sumNumbers = (previous,current) => previous + current;
// const numbersSumReducer = numbers.reduce(sumNumbers,0)

// const items = [
//     {id:1,name:'alta',price:150},
//     {id:1,name:'alta',price:150},
//     {id:1,name:'alta',price:150},
//     {id:1,name:'alta',price:150},
//     {id:1,name:'alta',price:150},
// ];
// const sumItems = (previous,current)=>previous + current.price;
// const sumItemsReducer = items.reduce(sumItems,0);

const getTotalPrice = products =>{
    const reducer = (previous,current) =>previous + current.price;
    const total = products.reduce(reducer,0);
    return total;
}


export {
    add,
    multiply,
    getTotalPrice as getTotal
};
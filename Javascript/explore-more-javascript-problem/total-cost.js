const shoppingCard = [
    {name:'phone', price:2000},
    {name:'shoes', price:200},
    {name:'table', price:700},
];
function totalCost(products){
    let sum = 0;
    for(i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;

    }
    return sum;
}

const expense = totalCost(shoppingCard);
console.log(expense);

// output : 2900
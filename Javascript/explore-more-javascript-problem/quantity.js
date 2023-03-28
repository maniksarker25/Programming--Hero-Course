const shoppingCard = [
    {name:'phone', price:2000, quantity:2},
    {name:'shoes', price:200,quantity:5},
    {name:'table', price:700,quantity:3},
];
function totalCost(products){
    let sum = 0;
    for(i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;

        sum = sum + productTotal;

    }
    return sum;
}

const expense = totalCost(shoppingCard);
console.log(expense);

//output: 7100;
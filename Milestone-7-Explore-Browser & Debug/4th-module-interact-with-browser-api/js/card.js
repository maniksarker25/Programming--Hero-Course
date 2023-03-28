const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity)
    displayProduct(product,quantity);
    saveProductToLocalStored(product,quantity);

}

const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

//
const getStoredShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStored = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

//
const displayProductFromLocalStorage = () =>{
   const saveCart = getStoredShoppingCart();
   for(product in saveCart){
    const quantity = saveCart[product];
    console.log(product,quantity)
    displayProduct(product,quantity)
   }

}
displayProductFromLocalStorage();
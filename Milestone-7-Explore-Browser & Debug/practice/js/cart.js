const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product,quantity);
    saveCartToLocalStorage(product, quantity);

}

const displayProduct = (product,quantity) =>{
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ulContainer.appendChild(li);
}

const getStoredShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveCartToLocalStorage = (product,quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    console.log(cart)
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);


}

const displayProductFromLocalStorage = () =>{
    const saveCart = getStoredShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();
const addToCartHandlers = () => {
    const productEl = document.getElementById('product')
    const quantityEl = document.getElementById('quantity')

    const product = productEl.value;
    const quantity = parseInt(quantityEl.value);

    // console.log('Product name:', product, 'Product quantity:', quantity);
    productEl.value = '';
    quantityEl.value = '';

    displayProduct(product, quantity)
    addCartProduct(product, quantity)

}

const displayProduct = (product, quantity) => {
    //    create element
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quantity}`
    // get the container
    const ul = document.getElementById('product-container')
    // append child
    ul.appendChild(li)
}

// cart saved to local storage section

const getCard = () => {
    let cart = {};
    const cartJSON = localStorage.getItem('Item Cart:')
    if (cartJSON) {
        cart = JSON.parse(cartJSON)
    }
    return cart;
}

// get the product of the cart

const addCartProduct = (product, quantity) => {

    const cart = getCard();
    if (cart[product]) {
        cart[product]=cart[product]+quantity
    }
    else {
        cart[product] = quantity;
    }

    console.log('Cart:', cart)
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('Item Cart:', cartJSON)
}

// display product form local storage
const displayProductFormLocalStorage=()=>{
    const cart= getCard();
    for( const product in cart){
        const quantity= cart[product];
        console.log(product, quantity)
        displayProduct(product,quantity)
    }

}
displayProductFormLocalStorage();



/** to save object/array in the local storage
 * 1. convert the object to JSON string by using JSON.stringify
 * 2. localstorage.setItem()
 * 
 */

/**
 * To get object/array form the local storage
 * 1. get the item form the local storage and it will be in JSOn String
 * 2. convert the Json String to object using JSON.parse
 */
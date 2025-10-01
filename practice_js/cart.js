const addToCart=()=>{
    const getQuantity=document.getElementById('pQuantity').value;
    const getName=document.getElementById('pName').value;
    setToLocalStorage(getName,getQuantity);
    // localStorage.setItem(getName,getQuantity);
}
const getCart= ()=>{
    let cart = {};
    const newProduct = localStorage.getItem('cart');
    if(newProduct){
        cart=JSON.parse(newProduct);
    }
    return cart;
}
const setToLocalStorage=(name,quantity)=>{
    const cart = getCart();
    // console.log(cart);
    cart[name]=quantity;
    localStorage.setItem('cart',JSON.stringify(cart));
}
const display=(name,quantity)=>{
    const getContainer = document.getElementById('container');
    const li= document.createElement('li');
    li.innerText=`${name}: ${quantity}`;
    getContainer.appendChild(li);

}
const displayFromLocalStorage=()=>{
   
    const products = getCart();
    for(const product in products){
        // console.log(product);
        display(product,products[product]);
    }
    // console.log(products);
}
displayFromLocalStorage();
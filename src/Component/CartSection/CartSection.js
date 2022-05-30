import React from 'react';

const CartSection = (props) => {
    const cart = props.cart;
    
    //let total=0;
    // for(let i =0;i<cart.length;i++){
        
    //     total+=parseFloat(cart[i].price);
        
    // }
    const totalPrice = cart.reduce((total,prd)=> total+parseFloat(prd.price) ,0);
    let shipping = 0;
    if(totalPrice>300){
        shipping=0;
    }
    else if(totalPrice<100 && totalPrice>0) {
        shipping=10.99;
    }
    
    const tax =Math.round(totalPrice/10) ;
    let total=totalPrice + shipping+tax;
    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Order: {cart.length}</p>
            <p>Product Price : {totalPrice.toFixed(2)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p>Total Price: {total.toFixed(2)}</p>
            
        </div>
    );
};

export default CartSection;
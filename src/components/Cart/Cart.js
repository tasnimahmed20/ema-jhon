import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    const cart=props.cart;
    const totalPrice= cart.reduce( (total,product) =>total+product.price,0)
    let shippingCost=0;
    if(totalPrice> 20 && totalPrice<100){
        shippingCost=4.99;
    }
    else if(totalPrice>100 && totalPrice <500){
        shippingCost=8.99;
    }
    
    const totalBeforeTax= totalPrice + shippingCost;
    const tax= totalBeforeTax/10;
    const grandTotal=totalBeforeTax+tax;
    const setPrecision=(makefixed)=>{
        let fixed=makefixed.toFixed(2);
        return fixed;
    }
    return (
        <div className="cart">
                <h3>Order Summery</h3>
                <h4>Items Ordered: {cart.length}</h4>
                <p>Items: {setPrecision(totalPrice)}</p>
                <p>Shipping & handling: {setPrecision(shippingCost)}</p>
                <p>Total Before Tax: {setPrecision(totalBeforeTax)}</p>
                <p>Estimated Tax: {setPrecision(tax)}</p>
                <h2>Order Total: {setPrecision(grandTotal)}</h2>
                <Link to="/review"><button className="main-button">Review Your Order</button></Link>
        </div>
    );
};

export default Cart;
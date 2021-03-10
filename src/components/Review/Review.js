import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import './Review.css';

const Review = () => {
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const saveCart=getDatabaseCart();
        const productKeys=Object.keys(saveCart);
        const cartProducts=productKeys.map(key => {
            const product=fakeData.find(pd => pd.key===key)
            product.quantity=saveCart[key];
            return product;
        });
       setCart(cartProducts);
    },[])
    return (
        <div className="review">
            <h1>Cart Item : {cart.length}</h1>
        </div>
    );
};

export default Review;
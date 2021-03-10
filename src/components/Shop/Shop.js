import React, { useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
   const firstTen=fakeData.slice(0,12);
   const [products,setProducts]=useState(firstTen);
   const [cart,setCart]=useState([])
   const handleAddProduct=(product) => {
       const newCart=[...cart,product];
       setCart(newCart);
       const sameProduct=newCart.filter(pd => pd.key===product.key);
       const count= sameProduct.length
       addToDatabaseCart(product.key,count);
   }
    return (
        <div className="shopContainer">
            <div className="productContainer">
                {
                    products.map(product => <Product showAddToCart={true} product={product} key={product.key} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
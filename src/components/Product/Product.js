import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Product = (props) => {
    const {name,img,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                 <img src={img} alt="ema-jhon"/>
            </div>
            <div className="product-details">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p>By : {seller}</p>
                <br/>
                <h5>Price : ${price}</h5>
                <br/>
                <p><small>Only {stock} left in stock. Order soon</small></p>
                <br/>
                {props.showAddToCart&&<button 
                type="button" className="main-button"
                onClick={()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon className="cartIcon" icon={faCartPlus} />Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;
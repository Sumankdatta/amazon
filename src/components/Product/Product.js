import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product,handleAddToCart }) => {

    const { category, name, seller, price, stock, img, ratings } = product;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className='product-price'>
                <p >Price : ${price}  </p>
                <p>Seller : {seller}</p>
                <p>Rating : {ratings} Star</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Product;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = ({ cart,clearCart,children }) => {
    

    
console.log(cart)
let total=0;
let shipping=0;
let quantity=0;

for(const value of cart){
    
    quantity=quantity + value.quantity;
    total=total + (value.price * value.quantity);
    shipping=shipping + value.shipping* value.quantity;
}
const tax=parseFloat((total * .1).toFixed(2));
const grandTotal=total + shipping +tax ;

    return (
        <div className='cart'>
            <h3 className='order-summary'>Order Summary</h3>

            <div className='calculation'>
                
                <p>Selected Items : {quantity}</p>
                <p>Total Price :${total}</p>
                <p>Total Shipping : ${shipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
                <p>Thank you</p>

                <button className='btn-clear' onClick={clearCart}>
                    Clear Cart <FontAwesomeIcon className='button-clear' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                <div >

                {children}

                </div>
               
            </div>
        </div>
    );
};

export default Cart;
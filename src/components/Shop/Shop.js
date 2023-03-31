import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

   useEffect(()=>{
    const storedCart=getStoredCart()
    const savedCart=[];

    for(const id in storedCart){
        const addedProduct=products.find(product=>product.id === id);
        
        if(addedProduct){
            const quantity=storedCart[id]
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct)

        }
    }
    setCart(savedCart)
   },[products])

    // useEffect(() => {
    //     const storedCart = getStoredCart()

    //     const savedCart = []

    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id)

    //         if (addedProduct) {
    //             const quantity = storedCart[id]
    //             addedProduct.quantity = quantity
    //             savedCart.push(addedProduct)
    //         }
    //     }
    //     setCart(savedCart)
    // }, [products])



    const handleAddToCart = (selectedProduct) => {

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        console.log(exists)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    const clearCart=()=>{
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product
                        product={product}
                        key={products.id}
                        handleAddToCart={handleAddToCart}
                      
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart  clearCart={clearCart} cart={cart}>
                    <Link to='/order'><button className='btn-next'>Review Items <FontAwesomeIcon className='button-clear' icon={faArrowRight}></FontAwesomeIcon></button></Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;
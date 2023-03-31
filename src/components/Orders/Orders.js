import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewContainer from '../ReviewContainer/ReviewContainer';

const Orders = () => {
    const productData=useLoaderData();
    const {products,initialCart}=productData;
    const [cart,setCart]=useState(initialCart);

const handleDelete=(id)=>{
    const deletedProduct=cart.filter(product=>product.id !==id);
    setCart(deletedProduct);
    removeFromDb(id)
}
const clearCart=()=>{
    setCart([])
    deleteShoppingCart()
}

    return (
        <div className='shop-container'>
         <div>
{
    cart.map(product=><ReviewContainer
    key={product.id}
    product={product}
    handleDelete={handleDelete}
    ></ReviewContainer>)
}
{
    cart.length===0 && <h1>You have no review ,please <Link to='/'>Shop</Link></h1>
}
         </div>
         <div className="cart-container">
<Cart clearCart={clearCart} cart={cart}></Cart>
         </div>
        </div>
    );
};


export default Orders;



// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { removeFromDb } from '../../utilities/fakedb';
// import Cart from '../Cart/Cart';
// import ReviewContainer from '../ReviewContainer/ReviewContainer';

// const Orders = () => {
//     const productData=useLoaderData()
//     // return object so destructer needed
//     const {products,initialCart}=productData;
//     const [cart,setCart]=useState(initialCart);
    

//     const handleDelete=(id)=>{
// const deletedProduct=cart.filter(product=>product.id !==id)
// if(deletedProduct){
//     setCart(deletedProduct)  
//     removeFromDb(id)
// }
// else{
// //   
// console.log('ace')
// }
//     }
    
//     return (
//         <div className='shop-container'>
//             <div className="">
// {
//     cart.map(product=><ReviewContainer
//     key={product.id}
//     product={product}
//     handleDelete={handleDelete}
//     ></ReviewContainer>)
// }
//             </div>
//             <div className="cart-container">
//                 <Cart cart={cart}></Cart>
//             </div>
//         </div>
//     );
// };

// export default Orders;
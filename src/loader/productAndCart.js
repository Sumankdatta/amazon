import { getStoredCart } from "../utilities/fakedb";

export const productAndCart = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    console.log(products)


    const savedCart = getStoredCart();
    const initialCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }

    return {products,initialCart};
}











// import { getStoredCart } from "../utilities/fakedb";

// export const productAndCart = async () => {
//     const productsData = await fetch('products.json');
//     console.log('previous-json',productsData)
//     const products = await productsData.json();
//     console.log('after-json',products)

//     // get cart

//     const savedCart = getStoredCart();
//     const initialCart = [];
//     console.log('save-cart', savedCart)
//     for (const id in savedCart) {
//         const addedProduct = products.find(product => product.id === id);
//         console.log(addedProduct)
//         if (addedProduct) {
//             const quantity = savedCart[id];
//             addedProduct.quantity = quantity;
//             initialCart.push(addedProduct)

//         }
//     }

//     return { products,initialCart }


// }
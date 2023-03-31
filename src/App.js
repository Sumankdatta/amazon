import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Shop from './components/Shop/Shop'
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import { productAndCart } from './loader/productAndCart';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/inventory',
          loader:  () =>  fetch('www.themealdb.com/api/json/v1/1/categories.php')
          ,
          element: <Inventory></Inventory>
        },
        {
          path: '/order',
          loader:productAndCart,
          element: <Orders></Orders>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;

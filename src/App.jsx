import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import Cart from './components/cart'
import Payment from './components/payment'

import { counterContext } from './components/context'
function App() {
  const [cart, setcart] = useState([]);
  const[price,setprice]= useState(0);
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/payment",
      element:<Payment/>
    }
  ])
  return (
    <>
     <counterContext.Provider value={{cart,setcart,price,setprice}}>
      <RouterProvider router={router}/> 
      </counterContext.Provider>
    </>
  )
}

export default App

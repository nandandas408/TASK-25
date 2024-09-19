import React from 'react'
import Navbar from './navbar'
import Credit from './credit'

import Cart from './cart'


const Payment = () => {
    return (
        <>


   <Navbar/>
   <div className=" flex w-[95vw] mx-auto justify-between my-20  ">
        <Credit/>
        <Cart to="/" do="Continue Shopping"/>
   </div>

   </>
  )
}

export default Payment

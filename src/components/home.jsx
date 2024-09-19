import React from 'react'
import Navbar from './navbar'
import Display from './display'

import Cart from './cart'

const home = () => {
   
  return (
      <>
   
   <Navbar/>
   <div className=" flex w-[95vw] mx-auto justify-between my-20  ">
        <Display/>
        <Cart to="/payment" do="Proceed to Payment"/>
   </div>

   </>
  )
}

export default home

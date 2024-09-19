import React from 'react' 
import Item from './items'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { useContext } from 'react';
import { counterContext } from './context';
import { Link } from 'react-router-dom';
const cartlist = (props) => {
    const Increment=(e)=>{
          const updatedCart=  value.cart.map((item=>{
                if (item.id==e){
                        value.setprice(value.price+parseInt(item.price))
                        return{...item,quantity:item.quantity+1}
                }
                return item
            }))
            value.setcart(updatedCart)
    }

    const Decrement=(e)=>{
        const updatedCart=  value.cart.map((item=>{
              if (item.id==e && item.quantity>0){
                   value.setprice(value.price-parseInt(item.price))
                      return{...item,quantity:item.quantity-1}
              }
              return item
          }))
          const filteredCart=updatedCart.filter((item=>item.quantity>0))
          value.setcart(filteredCart)
  }

    const value=useContext(counterContext)
  return ( <div className='cart w-1/2 border-2 border-black  rounded-md'>
    <h1 className='text-3xl font-bold text-center'>My Cart</h1>
    {value.cart.map(item=>{
      return  <div className="row flex justify-around items-center my-10">
        <img src={item.Img} alt="" className='w-20 object-contain ' />
        <div className="name text-2xl font-bold w-64 text-center">{item.Name}</div>
        <div className="qtnbtns flex gap-2">
              <button className="decrement" onClick={()=>Decrement(item.id)}><IoMdArrowDropleft /> </button>
              <div className="qty" >{item.quantity}</div>
              <button className="increment" onClick={()=>Increment(item.id)}><IoMdArrowDropright /></button>
            </div>
      </div>
    })}
    <div className="font-bold text-3xl text-center my-20">Total Price : ${value.price}</div>
   <div className='text-center'> <Link to={props.to}><button className='bg-green-500 py-5 px-10 font-bold text-2xl text-white rounded-md'>{props.do}</button></Link></div>
    </div>

  )
}

export default cartlist

import React from 'react'

const Credit = (props) => {
  return (
    <div className='border-2 border-black rounded-lg py-5 px-8'>
        <h1 className='text-2xl font-bold my-2' >Enter Your Card Details</h1>
      <form action="text" className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
        <label htmlFor="cardno">Enter Your Card No:</label>
        <input type="text" id='cardno' placeholder='Card Number' className='border-2 border-black rounded-md' /></div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="cardexp">Enter Your Card Expiry Daye:</label>
        <input type="text" id='cardexp' placeholder='Expiry Date'  className='border-2 border-black rounded-md'/></div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="CVV">Enter Your CVV No:</label>
        <input type="text" id='CVV' placeholder='CVV'  className='border-2 border-black rounded-md'/>
        </div>
      </form>
      <button className='bg-green-500 py-5 px-10 font-bold text-2xl text-white rounded-md mt-5'>Proceed to Payment</button>
    </div>
  )
}

export default Credit

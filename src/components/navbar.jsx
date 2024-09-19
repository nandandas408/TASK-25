import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 bg-slate-200 flex items-center'>
      <ul className='flex items-center gap-9 px-10 text-lg font-bold '>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Navbar

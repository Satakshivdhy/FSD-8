import React from 'react'
import { Link } from 'react-router-dom'
import { IoStorefront } from "react-icons/io5";
const header = () => {
  return (
 <>
    <div className='bg-blue-600 px-10 py-4 flex justify-between text-white'>
      <div className='flex gap-2 '>
        <p className='text-2xl font-bold'>FakeStore</p>
        <IoStorefront className='text-3xl' />
      </div>
      <div className='flex gap-4' >
        <Link to={"/"} >Home</Link>
        <Link to={"/about"} >About</Link>
        <Link to={"/products"} >Products</Link>
        <Link to={"/contact-us"} >Contact</Link>
        
      </div>
    </div>
</>
  )
}

export default header

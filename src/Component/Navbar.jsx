import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div>
      <div className='bg-[#043873] flex justify-between items-center px-[80px] py-5'>
        <div>
            <img src={logo} alt="" className='h-[34px] w-[191px]'/>
        </div>
        <div>
            <ul className='flex gap-7 text-white'>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className=''>
            <button className='bg-[#FFE492] px-[40px] py-[16px] rounded-md font-medium	mr-5'>Log in</button>
            <button className='bg-[#4F9CF9] px-[24px] py-[16px] rounded-md font-medium	text-white'>Try Whitespace</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

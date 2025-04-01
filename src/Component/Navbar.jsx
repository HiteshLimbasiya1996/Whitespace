import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


function Navbar() {
  return (
    <div>
      <div className='bg-[#043873] flex justify-between items-center px-[80px] py-3'>
        <div>
          <img src={logo} alt="" className='h-[34px] w-[191px]' />
        </div>
        <div>
          <ul className='flex gap-7 text-white'>
            <NavLink to='/'>
              <li>Home</li>
            </NavLink>
            
            <NavLink to='about'>About us</NavLink>
            <NavLink to='services'>Services</NavLink>
            <NavLink to='gallery'>Gallery</NavLink>
            <NavLink to='contact'>Contact us</NavLink>
          </ul>
        </div>
        <div className='flex'>
          <button className='bg-[#FFE492] px-[40px] py-[12px] rounded-md font-medium	mr-5'>Log in</button>
          <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white'>Try Whitespace <FaArrowRightLong className='ml-5' /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

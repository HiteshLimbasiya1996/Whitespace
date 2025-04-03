import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import { RiMenu3Line } from "react-icons/ri";


function Navbar() {
  // const [nav, setNav] = useState(false);
  // const toggleNav = () => setNav(!nav);
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
        <div className='flex '>
          <button className='bg-[#FFE492] px-[40px] py-[12px] rounded-md font-medium	mr-5'>Log in</button>
          <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white'>Try Whitespace <FaArrowRightLong className='ml-5' /></button>
        </div>
        {/* <div className=' flex w-8 h-8' onClick={toggleNav}>
          {
            nav ? <RxCross2 /> : <RiMenu3Line />
          }
        </div> */}
      </div>
      {/* {
                nav && (
                    <div className='lg:hidden fixed top-20 left-0 w-full flex flex-col items-center bg-slate-500'>
                        <ul className='grid justify-center items-center gap-5 text-lg w-full'>
                            <li className='boredr px-32 py-2 round bg-green-400 text-black mx-auto mt-3'>Home</li>
                            <li className='boredr px-32 py-2 round bg-green-400 text-black mx-auto mt-3'>Products</li>
                            <li className='boredr px-32 py-2 round bg-green-400 text-black mx-auto mt-3'>About Us</li>
                            <li className='boredr px-32 py-2 round bg-green-400 text-black mx-auto mt-3'>Services</li>
                            <li className='boredr px-32 py-2 round bg-green-400 text-black mx-auto mt-3 mb-5'>Contact us</li>
                        </ul>
                    </div>
                )
            } */}
    </div>
  )
}

export default Navbar

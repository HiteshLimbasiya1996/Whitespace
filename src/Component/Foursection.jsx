import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import solution from '../assets/solution.jpg'


function Foursection() {
  return (
    <div>
      <div className='bg-[#043873] px-[80px] flex gap-[50px] py-[80px] items-center'>
              <div className='w-[50%]'>
                <h1 className='text-white text-[55px] font-bold'>Use as Extension</h1>
                <p className='text-white text-[18px] my-[30px] '>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white'>Let’s Go<FaArrowRightLong className='ml-5' /></button>
              </div>
              <div className='w-[50%]'>
                <img src={solution} alt="" className='w-[100%] h-[400px] object-cover rounded-md	' />
              </div>
            </div>
    </div>
  )
}

export default Foursection

import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import conference from '../assets/conference.jpg'


function Slider() {
  return (
    <div>
      <div className='bg-[#043873] px-[80px] flex gap-[50px] py-[80px] items-center'>
              <div className='w-[50%] '>
                <h1 className='text-white text-[55px] font-bold '>Get More Done with whitepace</h1>
                <p className='text-white text-[18px] my-[30px] '>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white '>Try Whitepace free<FaArrowRightLong className='ml-5' /></button>
              </div>
              <div className='w-[50%] '>
                <img src={conference} alt="" className='w-[100%] h-[400px] object-cover rounded-md	' />
              </div>
            </div>
    </div>
  )
}

export default Slider

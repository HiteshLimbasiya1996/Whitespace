import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import digital from '../assets/digital.jpg'


function Secondsection() {
  return (
    <div>
     
      
            <div className='px-[80px] flex gap-[50px] py-[80px] items-center'>
              <div className='w-[50%]'>
                <h1 className='text-black text-[55px] font-bold'>Project Management</h1>
                <p className='text-black text-[18px] my-[30px] '>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white'>Get Started<FaArrowRightLong className='ml-5' /></button>
              </div>
              <div className='w-[50%]'>
                <img src={digital} alt="" className='w-[100%] h-[400px] object-cover rounded-md	' />
              </div>
            </div>
      
    </div>
  )
}

export default Secondsection

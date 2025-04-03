import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import business from '../assets/business.jpg'


function Thirdsection() {
  return (
    <div>
      <div className='px-[16px] md:px-[80px] py-[20px] md:flex gap-[40px]  pb-[80px] items-center'>
        <div className='md:w-[48%] sm:w-full'>
          <img src={business} alt="" className='w-[100%] h-[400px] object-cover rounded-md	' />
        </div>

        <div className='md:w-[48%] sm:w-full'>
          <h1 className='text-black text-[55px] font-bold'>Customise it to your needs</h1>
          <p className='text-black text-[18px] my-[30px] '>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
          <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white'>Let’s<FaArrowRightLong className='ml-5' /></button>
        </div>
      </div>
    </div>
  )
}

export default Thirdsection

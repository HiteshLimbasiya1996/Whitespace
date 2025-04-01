import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import project from '../assets/project.jpg'


function Fivesection() {
  return (
    <div>
      <div className='px-[80px] flex gap-[50px] py-[80px]  items-center'>
        <div className='w-[50%]'>
          <img src={project} alt="" className='w-[100%] h-[400px] object-cover rounded-md	' />
        </div>

        <div className='w-[50%]'>
          <h1 className='text-black text-[55px] font-bold'>Work together</h1>
          <p className='text-black text-[18px] my-[30px] '>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
          <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white'>Try it now<FaArrowRightLong className='ml-5' /></button>
        </div>
      </div>
    </div>
  )
}

export default Fivesection

import React from 'react'
import { FiCheckCircle } from "react-icons/fi";


function Sixsection() {
  return (
    <div>
      <div className='px-[16px] md:px-[80px] md:flex gap-[32px] pt-[10px] pb-[80px]  items-center'>
        <div className='px-[44px] py-[40px] border-[2px] border-[#FFE492] rounded-[10px]'>
          <h1 className='text-black text-[22px] font-bold mb-3'>Free</h1>
          <h1 className='text-black text-[30px] font-bold'>$0</h1>

          <p className='text-black text-[19px] my-[20px] font-medium'>Capture ideas and find them quickly</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 ' />Sync unlimited devices</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 ' />10 GB monthly uploads</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 ' />200 MB max. note size</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 size-[35px]' />Customize Home dashboard and access extra widgets</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 size-[28px]' />Connect primary Google Calendar account</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 size-[35px]' />Add due dates, reminders, and notifications to your tasks</p>

          <button className='flex items-center border-[2px] mt-[35px]	 border-[#FFE492] px-[40px] py-[16px] rounded-md font-medium	text-black'>Get Started</button>
        </div>
        {/* middle section */}
        <div className='px-[44px] py-[80px] bg-[#043873] rounded-[10px]'>
          <h1 className='text-white text-[22px] font-bold mb-3'>Personal</h1>
          <h1 className='text-[#FFE492] text-[30px] font-bold'>$11.99</h1>

          <p className='text-white text-[19px] my-[20px] font-medium'>Keep home and family on track</p>
          <p className='text-white text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 text-[#FFE492] ' />Sync unlimited devices</p>
          <p className='text-white text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 text-[#FFE492] ' />10 GB monthly uploads</p>
          <p className='text-white text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 text-[#FFE492] ' />200 MB max. note size</p>
          <p className='text-white text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 text-[#FFE492] size-[35px]' />Customize Home dashboard and access extra widgets</p>
          <p className='text-white text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 text-[#FFE492] size-[28px]' />Connect primary Google Calendar account</p>
          <p className='text-white text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 text-[#FFE492] size-[35px]' />Add due dates, reminders, and notifications to your tasks</p>

          <button className='flex items-center bg-[#4F9CF9] px-[40px] py-[16px] mt-[35px] rounded-md font-medium	text-white'>Get Started</button>

        </div>
        {/* middle section end */}

        <div className='px-[44px] py-[40px] border-[2px] border-[#FFE492] rounded-[10px]'>
          <h1 className='text-black text-[22px] font-bold mb-3'>Organization</h1>
          <h1 className='text-black text-[30px] font-bold'>$49.99</h1>

          <p className='text-black text-[19px] my-[20px] font-medium'>Capture ideas and find them quickly</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 ' />Sync unlimited devices</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 ' />10 GB monthly uploads</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 ' />200 MB max. note size</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 size-[35px]' />Customize Home dashboard and access extra widgets</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 size-[28px]' />Connect primary Google Calendar account</p>
          <p className='text-black text-[18px] my-[20px] flex items-center'><FiCheckCircle className='mr-4 size-[35px]' />Add due dates, reminders, and notifications to your tasks</p>

          <button className='flex items-center border-[2px] mt-[35px]	 border-[#FFE492] px-[40px] py-[16px] rounded-md font-medium	text-black'>Get Started</button>
        </div>

      </div>
    </div>
  )
}

export default Sixsection

import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Sevensection() {
    return (
        <div>
            <div className='bg-[#043873] px-[16px] md:px-[80px] py-[70px]'>
                <h1 className='text-white text-[55px] font-bold text-center '>Get More Done with whitepace</h1>
                <p className='text-white text-[18px] my-[30px] text-center'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <div className='flex justify-center'>
                <button className='flex items-center bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white '>Try Whitepace free<FaArrowRightLong className='ml-5' /></button>
                </div>
            </div>
        </div>
    )
}

export default Sevensection

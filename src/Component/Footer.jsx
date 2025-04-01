import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div className=' '>
            <div className="w-[100%] bg-[#043873] px-[80px] py-[70px] flex justify-between gap-[40px]">
                <div className="w-[30%]">
                    <img src={logo} alt="" srcset="" className='h-[34px] w-[191px]' />
                    <p className='text-white mt-4'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>
                <div className="w-[15%] text-white">
                    <h2 className='text-2xl font-semibold'>Product</h2>
                    <p className='pt-4'><a href="">Overview</a></p>
                    <p className='py-2'><a href="">Pricing</a></p>
                    <p><a href="">Customer stories</a></p>
                </div>
                <div className="w-[20%] text-white">
                    <h2 className='text-2xl font-semibold'>Resources</h2>
                    <p className='pt-4'><a href="">Blog</a></p>
                    <p className='py-2'><a href="">Guides & tutorials</a></p>
                    <p><a href="">Help center</a></p>
                </div>
                <div className="w-[20%] text-white">
                    <h2 className='text-2xl font-semibold'>Company</h2>
                    <p className='pt-4'><a href="">About</a></p>
                    <p className='py-2'><a href="">Careers</a></p>
                    <p><a href="">Media kit</a></p>
                </div>
                <div className="w-[20%] text-white">
                    <h2 className='text-3xl font-semibold'>Try It Today</h2>
                    <p className='pt-4'>Get started for free.
                        Add your whole team as your needs grow.</p>
                    <button className='bg-[#4F9CF9] px-[24px] py-[12px] rounded-md font-medium	text-white mt-4'>Try Whitespace</button>
                </div>
            </div>
        </div>
    )
}

export default Footer

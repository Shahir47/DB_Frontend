import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";

const SideNav = () => {
  return (
    <div className='w-[70px] h-screen bg-[#0d406ae3] fixed'>
        <a href='#hero'>
            <div className='flex items-end tracking-widest font_logo'>
                <h1 className='text-6xl ml-[14px] text-white'>S</h1>
                <h2 className='text-4xl text-[#042138e3]'><span className='text-white mr-[3px]'>o</span>ccer</h2>
            </div>
            <div className='flex items-end tracking-widest font_logo'>
                <h1 className='text-6xl ml-[29px] text-white'>P</h1>
                <h2 className='text-4xl ml-[3px] text-[#042138e3]'>redict</h2>
            </div>
        </a>
        <div className='w-[50px] mx-auto h-[60%] flex flex-col items-center justify-center'>
            <a href="#hero" >
                <div className='tooltip my-[60px]'>
                    <GiSoccerBall className=' text-white' size={40}/>
                    <span className='tooltip-text px-2'>Home</span>
                </div>
            </a>
            <a href="#hist">
                <div className='tooltip'>
                    <GiSoccerField className='text-white' size={40}/>
                    <span className='tooltip-text px-2'>History</span>
                </div>
            </a>
        </div>
    </div>
  )
}

export default SideNav
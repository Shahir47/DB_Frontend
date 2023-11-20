import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";

const SideNav = () => {
  return (
    <div className='w-[70px] h-screen bg-[#0d406ae3] fixed'>
        <div className='flex items-end tracking-widest'>
            <h1 className='ml-[10px] text-white'>S</h1>
            <h2 className='text-[#042138e3]'><span className='text-white mr-[3px]'>o</span>ccer</h2>
        </div>
        <div className='flex items-end tracking-widest'>
            <h1 className='ml-[30px] text-white'>P</h1>
            <h2 className='ml-[3px] text-[#042138e3]'>redict</h2>
        </div>
        <div className='w-[50px] mx-auto h-[60%] flex flex-col items-center justify-center'>
            <a href="#hero" >
                <GiSoccerBall className='my-[60px] text-white' size={40}/>
            </a>
            <a href="#hist">
                <GiSoccerField className='text-white' size={40}/>
            </a>
        </div>
    </div>
  )
}

export default SideNav
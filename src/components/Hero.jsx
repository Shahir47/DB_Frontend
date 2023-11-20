import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className='w-full h-screen'>
        <div className='max-w-[1240px] mx-auto p-1'>
            <div className='mt-[100px] mb-[150px]'>
                <h2 className='text-center'>Welcome to Soccer Predict</h2>
                <p className='text-center uppercase pt-2 tracking-wider'>A platform to predict the score of incoming soccer matches.</p>
            </div>
            <div className='max-w-[1050px] mx-auto'>
                <h3>Let's Predict</h3>
                <p className='text-sm tracking-wider'>Enter the information about the match you want to predict</p>
                <div className='mt-[25px]'>
                    <form action="">
                        <div className='grid grid-cols-3 gap-8'>
                            <div className='flex flex-col'>
                                <label className='text-lg' for='home_team'>Home Team</label>
                                <input className='text-[#021321e3] px-2 h-[45px] rounded-lg border-gray-300 border-[2px] focus:outline-[2px] outline-gray-400' id='home_team' type='text' name='home_team'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg' for='away_team'>Away Team</label>
                                <input className='text-[#021321e3] px-2 h-[45px] rounded-lg border-gray-300 border-[2px] focus:outline-[2px] outline-gray-400' id='away_team' type='text' name='away_team'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg' for='date'>Date</label>
                                <input className='text-[#021321e3] px-2 h-[45px] rounded-lg border-gray-300 border-[2px] focus:outline-[2px] outline-gray-400' id='date' type='date' name='date'/>
                            </div>

                            <div></div>
                            <div className='mx-auto '>
                                <button className='rounded-lg text-lg bg-[#0d406ae3] text-white border-2 border-[#0d406a] h-[45px] w-[200px] flex justify-center items-center'>Submit</button>
                            </div>
                            <div></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
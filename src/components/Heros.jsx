import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Heros = () => {
  return (
    <div name='home' className='w-full h-screen'>

      {/*container*/}
      <div className='font-a font-w max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-[40px] pb-1'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] pb-1'>Vinothkumar</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-[19px]' > I’m a front-end developer specializing in building and
          designing exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.</p>
        <div>
          <button className='text-[white] border-2 flex px-6 py-3 my-2 bg-black items-center hover:bg-pink-600 group'>view more
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2' />
            </span>
          </button>
        </div>
      </div>


    </div>



  )
}

export default Heros
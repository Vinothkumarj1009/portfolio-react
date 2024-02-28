import React from 'react'
import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import JS from '../assests/javascript.png'
import TAILWIND from '../assests/tailwind.png'
import JAVA from '../assests/java.png'
import PYTHON from '../assests/python.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-slate-200 font-a font-w'>
        {/* boxes */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-black font-a font-w ps-4'>Skills</p>
                <p className='py-4'>These are the technologies i've worked on</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto items-center mt-5' src={HTML} alt='html'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto items-center mt-5' src={CSS} alt='css'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto items-center mt-5' src={JS} alt='javascript'/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto items-center mt-5' src={TAILWIND} alt='tailwind'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto items-center mt-5' src={PYTHON} alt='python'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-[140px] mx-auto items-center mt-5' src={JAVA} alt='java'/>
                    <p className='my-4 pt-2'>Java</p>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Skills
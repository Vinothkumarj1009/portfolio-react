import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#ccd6f6] font-a font-w'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p className=''>Hi, I’m an Engineering Graduate pursuing a challenging career</p>
                    </div>
                    <div>
                        <p>I have completed a web development course on Internshala, where I learned all the basics of front-end development. Through the course of learning, I have built a few mini-projects. And on my academic final year project, I worked on the front-end designs.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
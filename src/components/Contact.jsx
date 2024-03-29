import React from 'react'

const Contact = () => {
  return (
    <div>
         <div name='contact' className='w-full h-screen flex justify-center items-center font-a font-w snap-y snap-mandatory snap-center'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='font-a font-w py-4'> Submit the form below </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me..!</button>
        </form>
    </div>
    </div>
  )
}

export default Contact
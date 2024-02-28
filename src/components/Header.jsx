import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assests/logo.png'
import '../index.css'
import { Link } from 'react-scroll'


function Header() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F6F5F5]'>
      <div>
        <img src={Logo} alt='logo' style={{ width: "50px" }} />
      </div>


      {/*top-menu */}
      <ul className='font-a font-w hidden md:flex '>
        <li className='px-3 cursor-default'><Link className='hover:text-[#D81B60]' to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='px-3 cursor-default'><Link className='hover:text-[#D81B60]' to="about" smooth={true} duration={500}>About</Link></li>
        <li className='px-3 cursor-default'><Link className='hover:text-[#D81B60]' to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='px-3 cursor-default'><Link className='hover:text-[#D81B60]' to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>


      {/* ham */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile view */}
      <ul className={!nav ? 'hidden' : 'absolute font-a font-w top-0 left-0 w-full h-screen bg-[#F6F5F5] flex flex-col justify-center text-center '}>
        <li className='py-6 text-4xl cursor-default'><Link className='hover:text-[#D81B60]' onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl cursor-default'><Link className='hover:text-[#D81B60]' onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className='py-6 text-4xl cursor-default'><Link className='hover:text-[#D81B60]' onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl cursor-default'><Link className='hover:text-[#D81B60]' onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>


      {/* side-icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className=' font-a font-w w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-0px] duration-300 bg-blue-600'>
            <a className=' ml-[10px] flex justify-between items-center w-full text-gray-100'
              href='https://www.linkedin.com/in/vinothkumar-j-956469230/' target='blank'>LinkedIn
              <FaLinkedin size={30} className='mr-3' />
            </a>
          </li>
          <li className=' font-a font-w w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-0px] duration-300 bg-[#333333]'>
            <a className=' ml-[10px] flex justify-between items-center w-full text-gray-100'
              href='https://github.com/Vinothkumarj1009' target='blank'>Github
               <FaGithub size={30} className='mr-3' />
            </a>
          </li>
          <li className=' font-a font-w w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-0px] duration-300 bg-[#565f69]'>
            <a className=' ml-[10px] flex justify-between items-center w-full text-gray-100'
              href='https://drive.google.com/file/d/1glGyWu1ItYsawcitpvMkjHlN7si6RyX0/view?usp=sharing' target='blank'>Resume 
              <BsFillPersonLinesFill size={30} className='mr-3' />
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Header
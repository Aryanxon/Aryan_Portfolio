import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from "react-scroll";
import { HiOutlineMail } from 'react-icons/hi';





const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='shadow-lg fixed shadow-black w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '50px' }} /> */}
        <h1 className='text-4xl text-blue-400 font-bold'><span className='text-6xl text-blue-600'>A</span>B</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex text-xl gap-14'>
        <li className='cursor-pointer hover:scale-110 hover:text-blue-300 duration-500'><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='cursor-pointer hover:scale-110 hover:text-blue-300 duration-500'><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li className='cursor-pointer hover:scale-110 hover:text-blue-300 duration-500'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className='cursor-pointer hover:scale-110 hover:text-blue-300 duration-500'><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl cursor-pointer hover:text-blue-300 duration-500'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl cursor-pointer hover:text-blue-300 duration-500'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
        <li className='py-6 text-4xl cursor-pointer hover:text-blue-300 duration-500'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl cursor-pointer hover:text-blue-300 duration-500'><Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link></li>
       
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] px-4 duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/aryan-bandooni-0840b9286/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] px-4 duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Aryanxon'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] px-4 duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
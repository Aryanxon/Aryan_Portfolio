import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-scroll";


function Footer() {
  return (
    <div className='bg-[#0a192f] md:mx-auto p-4 w-full flex flex-col justify-center'>
        <div className='flex justify-center text-4xl text-white font-bold'>Aryan Bandooni</div>
      <div className='md:flex px-10 grid sm:grid-cols-2 md:grid-cols-3'>
        <div className='md:w-[30%] px-10 md:border-r-2 border-purple-700'>
            <h1 className='text-4xl text-pink-700 font-bold mb-10'>Contact</h1>
            <ul className='px-6'>
               <a href="https://www.linkedin.com/in/aryan-bandooni-0840b9286/"><li className='flex items-center gap-2 text-white text-xl mb-4'><FaLinkedin className='text-blue-800'/>LinkedIn</li></a>
               <a href="https://www.linkedin.com/in/aryan-bandooni-0840b9286/"><li className='flex items-center gap-2 text-white text-xl mb-4'><FaGithub className='text-gray-800'/>Github</li></a>
               <a href="https://www.linkedin.com/in/aryan-bandooni-0840b9286/"><li className='flex items-center gap-2 text-white text-md mb-4'><CiMail className='text-red-800 font-bold'/>aryanbandooni19@gmail.com</li></a>
            </ul>
        </div>
        <div className='md:w-[30%] px-10 mb-4 md:border-r-2 border-purple-700'>
        <h1 className='text-4xl text-blue-700 font-bold mb-10'>Pages</h1>
            <ul className='px-6'>
               <li className='cursor-pointer text-white text-xl hover:scale-110 hover:text-blue-300 duration-500'><Link to='home' smooth={true} duration={500}>Home</Link></li>
               <li className='cursor-pointer text-white text-xl hover:scale-110 hover:text-blue-300 duration-500'><Link to='about' smooth={true} duration={500}>About</Link></li>
               <li className='cursor-pointer text-white text-xl hover:scale-110 hover:text-blue-300 duration-500'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
              <li className='cursor-pointer text-white text-xl hover:scale-110 hover:text-blue-300 duration-500'><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
            </ul>
        </div>
        <div className='md:w-[30%] px-10'>
        <h1 className='text-4xl text-slate-700 font-bold mb-10'>Skills</h1>
        <ul className='px-6 grid xl:grid-cols-2'>
            <li className='text-white text-xl mb-4'>React Js</li>
            <li className='text-white text-xl mb-4'>Javascript</li>
            <li className='text-white text-xl mb-4'>Tailwindcss</li>
            <li className='text-white text-xl mb-4'>Bootstrap</li>
            <li className='text-white text-xl mb-4'>PHP</li>
            <li className='text-white text-xl mb-4'>HTML</li>
            <li className='text-white text-xl mb-4'>Java</li>

        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

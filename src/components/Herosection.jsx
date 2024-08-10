import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import  Aryan  from '../assets/Aryan1.png'

function Herosection() {
  return (
   <div name='home' className='bg-[#0a192f] w-full '>
    <div className='mx-auto px-20 grid sm:grid-cols-2 md:grid-cols-3 pt-28 md:flex justify-center h-full'>
      <div className='md:w-[30%] justify-start'>
         <p className='text-pink-600 text-2xl sm:text-2xl'>Hi, My name is</p>
         <h1 className='text-6xl sm:text-7xl font-bold text-white'>Aryan Bandooni</h1>
         <p className='text-4xl sm:text-7xl font-bold text-gray-400'> I’m a front-end developer </p>
         <div>
          <button className='text-white group border-2 px-3 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work <span className='group-hover:rotate-90 duration-300'><HiArrowRight className='ml-3'/></span></button>
        </div>
      </div>
      <div className='md:w-[25%] '>
        <img src={Aryan} alt="Aryan" className='w-[270px] rounded-full'/>
       </div>   
      <div className='md:w-[20%]'>
        <p className='text-gray-400 pt-10 md:pt-40 max-w-[700px] text-xl'>A passionate web developer with the Tech stack of React js, Javascript, Tailwind css, bootstrap, PHP, css, html. I have strong foundation in javascript. I can develop user-friendly and visually appealing websites.</p>

      </div>
    </div>
   </div>
  )
}

export default Herosection

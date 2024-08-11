import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='md:max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Aryan Bandooni, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I bring a wealth of practical experience and a passion for front-end development to your organization. My expertise in JavaScript, React JS, CSS, Bootstrap, Php, HTML, and Tailwind CSS allows me to create dynamic and responsive web applications that enhance user experience.</p>  
          </div>
        </div>
    </div>
  </div>
);
}

export default About

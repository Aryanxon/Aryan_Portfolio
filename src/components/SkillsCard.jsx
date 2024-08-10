import React from 'react'

function SkillsCard({images, text}) {
  return (
    <>
        <div className='shadow-md shadow-[#040c16] hover:shadow-blue-500 hover:shadow-lg hover:scale-110 duration-500 p-2'>
                    <img src={images} alt="HTML" className='mx-auto' />
                    <p>{text}</p>
                </div>
    </>
  )
}

export default SkillsCard

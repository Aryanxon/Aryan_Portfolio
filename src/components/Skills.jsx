import React from 'react'
import HTML from '../assets/html.png'
import javascript from '../assets/javascript.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import SkillsCard from './SkillsCard'

function Skills() {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold text-center border-b-4 border-pink-600'>TechStack</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                <SkillsCard images={react} text='React js'/>
                <SkillsCard images={tailwind} text='Tailwind css'/>
                <SkillsCard images={javascript} text='Javascript'/>
                <SkillsCard images={bootstrap} text='Bootstrap'/>
                <SkillsCard images={HTML} text='HTML'/>
                <SkillsCard images={css} text='CSS'/>
                
            </div>
        </div>

    </div>
  )
}

export default Skills

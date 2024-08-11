import React from 'react'
import ProjectCard from './ProjectCard'
import Project_management from '../assets/Project-management.png'
import Travel from '../assets/Travel web.png'
import Todo from '../assets/Todo_List.png'


function Project() {
  return (
    <div name='projects' className='bg-[#0a192f] text-gray-300 w-full mb-12'>
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-screen'>
        <div>
            <p className='text-4xl font-bold text-center border-b-4 border-pink-600'>Projects</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 text-center gap-6 py-8 md:px-14'>
           <a href="https://basic-react-project-management-web.netlify.app/"> <ProjectCard image={Project_management } text='Project Management app' para="This project management website, built with React JS and styled using Tailwind CSS, is designed to 
help users efficiently organize and manage their work."/></a>
           <a href="https://basic-react-project-management-web.netlify.app/"> <ProjectCard image={Travel} text='Travel website' para="I created a visually appealing website using Next js to showcase a basic travel website. The homepage features a simple background reflecting the travel app."/></a>
           <a href="https://aryan-todo-list-project.netlify.app/"> <ProjectCard image={Todo} text='Todo List ' para="This project management website, built with React JS and styled using Tailwind CSS, is designed to 
help users efficiently organize and manage their work."/></a>
        </div>
        </div>
    </div>
  )
}

export default Project

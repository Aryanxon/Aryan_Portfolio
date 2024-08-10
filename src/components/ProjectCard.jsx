import React from 'react'

function ProjectCard({image, text, para}) {
  return (
    <>
     <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-80 w-80">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="Aryan" />
      </div>
     
      <div className="w-full h-full hover:bg-slate-800/60 absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-xl font-bold text-blue-800">{text}</h1>
        <p className="font-dmserif text-sm font-bold text-white">{para}</p>
      </div>      
    </div>
    </>
  )
}

export default ProjectCard

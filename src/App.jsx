import Herosection from "./components/Herosection.jsx"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Project from "./components/Project.jsx"
import Footer from "./components/Footer.jsx"
import React from "react"


function App() {

  return (
    <div className="bg-[#0a192f]">
    <Navbar/>
    <Herosection/>
    <About/>
    <Skills/>
    <Project/>
    <Footer/>
    </div>
  )
}

export default App

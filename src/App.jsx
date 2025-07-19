// import React from 'react'
import './App.css'
import Landing from './components/Landing'
import About from './components/About'
import ProjectLanding from './components/ProjectLanding'
import VehicleLanding from './components/VehicleLanding'
import OchiLanding from './components/OchiLanding'
import CanvaLanding from './components/CanvaLanding'
import NetflixLanding from './components/NetflixLanding'
import LocomotiveScroll from 'locomotive-scroll';
import Skills from './components/Skillls'
import Footer from './components/Footer';
  
function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-[#fffff] min-h-screen w-full '>
      <Landing />
      <About />
      <ProjectLanding />
      <VehicleLanding />
      <OchiLanding />
      <CanvaLanding />
      <NetflixLanding/>
      <Skills />  
      <Footer />
     
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillSection from './skills/SkillSection'
import ProjectSection from './project/ProjectSection'
import ContactSection from './contact/ContactSection'
import FooterSection from './footer/FooterSection'
import ScrollBack from './ScrollBack'
import AboutMeSection from './AboutMeSection'

function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
      {/* Back to Top Button */}
      <ScrollBack />
    </>
  )
}

export default App

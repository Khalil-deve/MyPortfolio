import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillSection from './skills/SkillSection'
import ProjectSection from './project/ProjectSection'
import ContactSection from './contact/ContactSection'
import FooterSection from './footer/FooterSection'
import ScrollBack from './ScrollBack'

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
      {/* Back to Top Button */}
      <ScrollBack />
    </div>
  )
}

export default App

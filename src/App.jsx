import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import AnimatedBackground from './components/AnimatedBackground';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  // Enable ultra-smooth scrolling
  useSmoothScroll();

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Wow Factor Elements */}
      <ScrollProgress />
      <AnimatedBackground />

      {/* Main Content */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;



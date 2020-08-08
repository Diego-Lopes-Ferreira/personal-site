import React, { useRef } from 'react';
import './App.css';

import Header from './pages/header';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/Skills';

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
function scrollToRef(ref) {
  window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
}

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  return (
    <div className="App">
      {/* <Header /> */}
      <Home refere={homeRef} scrollTo={() => scrollToRef(aboutRef)} />
      <About refere={aboutRef} />
      <Skills refere={skillsRef} />
    </div>
  );
}

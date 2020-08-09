import React, { useRef } from 'react';

import './index.css';

import Header from '../../Components/Header';
import Main from '../../Components/Home-main';
import About from '../../Components/Home-about';
import Skills from '../../Components/Home-skills';

function scrollToRef(ref) {
  /* Scrolls to the component position */
  window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
}

export default function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const onPageNavigation = {
    goToHome: () => scrollToRef(homeRef),
    goToAbout: () => scrollToRef(aboutRef),
    goToSkills: () => scrollToRef(skillsRef),
    goToBlog: () => console.log('FUI PRO BLOG'),
  }

  return (
    <div className="Home">
      <Header functions={onPageNavigation} />
      <Main refere={homeRef} scrollTo={onPageNavigation.goToAbout} />
      <About refere={aboutRef} />
      <Skills refere={skillsRef} />
    </div>
  );
}

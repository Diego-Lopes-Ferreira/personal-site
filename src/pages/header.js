import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Header({ functions }) {
  const [bgColor, setBgColor] = useState('#00000000');

  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
    
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if(scrollPosition > 400) {
      setBgColor('linear-gradient(#414141, #414141aa, #41414100) ');
    } else {
      setBgColor('linear-gradient(#41414100, #41414100');
    }
  }, [scrollPosition])

  return (
    <header className="app-header-wrapper" style={{ backgroundColor: '#00000000', backgroundImage: bgColor }}>
      <div className="app-header">
        <div className="app-header-name">
          <p>{personInfo.name}</p>
        </div>
        <div className="app-header-pages">
          <button onClick={() => { functions.goToHome() }} >Home</button>
          <button onClick={() => { functions.goToAbout() }} >Sobre</button>
          <button onClick={() => { functions.goToSkills() }} >Skills</button>
          <button onClick={() => { functions.goToBlog() }} >Blog</button>
        </div>
      </div>
    </header>
  );
}

const personInfo = {
  name: 'Flávio Smania Ferreira',
  buttons: [],
}
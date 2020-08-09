import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Header({ functions }) {
  const [bgColor, setBgColor] = useState('#00000000');
  const [txtColor, settxtColor] = useState('#00000000');

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
    if (scrollPosition > 400) {
      setBgColor('#dddddd');
      settxtColor('#414141')
    } else {
      setBgColor('#00000000');
      settxtColor('#dddddd');
    }
  }, [scrollPosition])

  return (
    <header className="app-header-wrapper" style={{ backgroundColor: bgColor }}>
      <div className="app-header">
        <div className="app-header-name">
          <p style={{ color: txtColor }}>{personInfo.name}</p>
        </div>
        <div className="app-header-pages">
          <button style={{ color: txtColor }} onClick={() => { functions.goToHome() }} >Home</button>
          <button style={{ color: txtColor }} onClick={() => { functions.goToAbout() }} >Sobre</button>
          <button style={{ color: txtColor }} onClick={() => { functions.goToSkills() }} >Skills</button>
          <button style={{ color: txtColor }} onClick={() => { functions.goToBlog() }} >Blog</button>
        </div>
      </div>
    </header>
  );
}

const personInfo = {
  name: 'Flávio Smania Ferreira',
  buttons: [],
}
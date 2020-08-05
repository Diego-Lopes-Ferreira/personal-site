import React, { useState } from 'react';
import '../App.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  return (
    <header className="app-home-wrapper" >
      <div className="app-home">
        <h1>{personInfo.name}</h1>
        <h3>{personInfo.desc}</h3>
        <div className="app-home-social-media">
          <div className="button">
            <p>ICON</p>
          </div>
          <div className="button">
            <p>ICON</p>
          </div>
        </div>
        <button>Sobre mim</button>
      </div>
    </header>
  );
}

const personInfo = {
  name: 'Flávio Smania Ferreira',
  desc: 'Gerente Administrativo da Projex Engenharia, Contador, Controller e Professor Universitário',
}


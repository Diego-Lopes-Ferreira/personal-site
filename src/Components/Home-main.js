import React from 'react';


function SocialIcon({ name }) {
  return (
    <div className="button">
      <p>ICON</p>
    </div>
  );
}

export default function Main({ refere, scrollTo }) {
  return (
    <header ref={refere} className="home-main-wrapper" >
      <div className="home-main">
        <h1>{personInfo.name}</h1>
        <h3>{personInfo.desc}</h3>
        <div className="home-main-social-media">
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
        </div>
        <button onClick={scrollTo}>Sobre mim</button>
      </div>
    </header>
  );
}

const personInfo = {
  name: 'Flávio Smania Ferreira',
  desc: 'Gerente Administrativo da Projex Engenharia, Contador, Controller e Professor Universitário',
}

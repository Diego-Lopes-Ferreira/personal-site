import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


function SocialIcon({ name, href }) {
  function IconType({ type }) {
    switch (type) {
      case 'facebook':
        return <FaFacebook />
      case 'instagram':
        return <FaInstagram />
      case 'linkedin':
        return <FaLinkedin />
      case 'email':
        return <MdEmail />
      default:
        return <p>ICON</p>
    }
  }
  return (
    <div className="home-main-button">
      <a href={href} target='blank'>
        <IconType type={name} />
      </a>
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
          <SocialIcon name='email' href='https://google.com' />
          <SocialIcon name='facebook' href='https://google.com' />
          <SocialIcon name='linkedin' href='https://google.com'/>
        </div>
        <button onClick={scrollTo}>Sobre</button>
      </div>
    </header>
  );
}

const personInfo = {
  name: 'Flávio Smania Ferreira',
  desc: 'Gerente Administrativo da Projex Engenharia, Contador, Controller e Professor Universitário',
}

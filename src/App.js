import React, { useRef } from 'react';
import './App.css';

import Header from './pages/header';
import Home from './pages/home';

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
function scrollToRef(ref) {
  window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
}

export default function App() {

  
  const myref = useRef(null);


  return (
    <div className="App">
      {/* <Header /> */}
      <Home scrollTo={() => scrollToRef(myref)} />
      <Home refere={myref} />
    </div>
  );
}

import React, { useRef } from 'react';
import '../App.css';


export default function Skills({ refere }) {
  return (
    <div ref={refere} className="app-about-skills-wrapper">
      <div className="app-about-skills">
        <nav>
          <a href=""></a>
          <a href=""></a>
        </nav>
        <div className="sla">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ title, progress }) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div className="">
        <div className="" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
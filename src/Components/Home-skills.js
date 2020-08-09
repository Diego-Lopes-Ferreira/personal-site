import React, { useState, useEffect } from 'react';

export default function Skills({ refere }) {
  const [hardSkill, setWhatSkill] = useState(true);
  const [skills, setSkills] = useState();

  useEffect(() => {
    if (hardSkill) {
      setSkills(personInfo.hardSkills.map((item) => (
        <ProgressBar title={item.title} progress={item.percentage} />
      ))
      )
    } else {
      setSkills(personInfo.softSkills.map((item) => (
        <ProgressBar title={item.title} progress={item.percentage} />
      ))
      )
    }
  }, [hardSkill])

  const notSelected = {
    borderBottomColor: '#414141',
  }
  const selected = {
    borderTopColor: '#414141',
    borderRightColor: '#414141',
    borderLeftColor: '#414141',
    borderBottomColor: '#00000000',
  }

  return (
    <div ref={refere} className="home-skills-wrapper">
      <div className="home-skills">
        <nav>
          <button
            style={hardSkill ? selected : notSelected}
            onClick={() => setWhatSkill(true)}
          >Hard Skills</button>
          <button
            style={hardSkill ? notSelected : selected}
            onClick={() => setWhatSkill(false)}
          >Soft Skills</button>
        </nav>

        <div className="home-skill-progress">
          {skills}
        </div>

      </div>
    </div>
  );
}

function ProgressBar({ title, progress }) {
  return (
    <div className="home-skill-progress-wrapper">
      <div className="home-skill-progress-txt">
        <p>{title}</p>
      </div>
      <div className="home-skill-bar">
        <div
          className="home-skill-bar-progress"
          style={{ backgroundColor: '#414141', width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

const personInfo = {
  softSkills: [
    { title: 'SOFT', percentage: '40' },
    { title: 'SOFT', percentage: '40' },
    { title: 'SOFT', percentage: '40' },
    { title: 'SOFT', percentage: '40' },
    { title: 'SOFT', percentage: '40' },
    { title: 'SOFT', percentage: '40' },
    { title: 'SOFT', percentage: '40' },
    { title: 'SOFT', percentage: '40' },
  ],
  hardSkills: [
    { title: 'HARD', percentage: '80' },
    { title: 'HARD', percentage: '80' },
    { title: 'HARD', percentage: '80' },
    { title: 'HARD', percentage: '80' },
    { title: 'HARD', percentage: '80' },
    { title: 'HARD', percentage: '80' },
    { title: 'HARD', percentage: '80' },
    { title: 'HARD', percentage: '80' },
  ],
}

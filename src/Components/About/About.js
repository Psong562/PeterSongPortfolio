import React from 'react';
// import NavBar from './Components/NavBar';
import AboutCard from './AboutCard';

import {useEffect, useState } from 'react'
import LoadingPage from './LoadingPage';
import AboutFlip from './AboutFlip';

const About = () => {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <LoadingPage load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>

      <AboutCard />
      <AboutFlip />
      </div>
    </>
    
  )
}

export default About

import React from 'react';
// import NavBar from './Components/NavBar';
import AboutCard from './AboutCard';
import Headshot from './HeadShot';
import {useEffect, useState } from 'react'
import LoadingPage from './LoadingPage';

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
      <Headshot />
      </div>
    </>
    
  )
}

export default About

import React from 'react';
// import NavBar from './Components/NavBar';
import AboutCard from './AboutCard';

import { useEffect, useState } from 'react'
import LoadingPage from './LoadingPage';
import AboutFlip from './AboutFlip';
import "../../App.css"

const About = () => {

  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 2500);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <main className='sections'>
      {/* <LoadingPage load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}> */}

        <AboutCard />
        <AboutFlip />
      {/* </div> */}
    </main>

  )
}

export default About

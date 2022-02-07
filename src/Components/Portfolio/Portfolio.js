import React from "react"
// import PortfolioCard from "./PortfolioCard"
import FlipCardCard from "./FlipCard"
import Resume from "./Resume"
import "../../App.css"
import ProjectComponent from "./ProjectsComponent"


const Portfolio = () => {
  return (
    <section className="sections" id='Portfolio'>
    {/* <PortfolioCard /> */}
   <h1 className="text-center">Portfolio</h1>
    <Resume/>
    <FlipCardCard />
      <ProjectComponent projectCSS={'studyRoom32'} projectName={'StudyRoom32'} projectDescription={'This is a Test'} projectTools={'Mongodb, Express, React, NodeJS, Javascript, React Boostrap, Framer Motion'} githubLink={'www.google.com'} herokuLink={'https://studyroom32.herokuapp.com/'}/>
        </section>
  )
}

export default Portfolio

import React from "react"
import PortfolioCard from "./PortfolioCard"
import FlipCardCard from "./FlipCard"
import Resume from "./Resume"
import "../../App.css"


const Portfolio = () => {
  return (
    <section className="sections">
    {/* <PortfolioCard /> */}
   <h1 className="text-center">Portfolio</h1>
    <Resume/>
    <FlipCardCard />
    
        </section>
  )
}

export default Portfolio

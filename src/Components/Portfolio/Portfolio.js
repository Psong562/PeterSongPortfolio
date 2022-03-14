import React from "react"
// import FlipCardCard from "./FlipCard"
import Resume from "./Resume"
import "../../App.css"
import ProjectComponent1 from "./ProjectComponent1"
import ProjectComponent2 from "./ProjectComponent2"
import { Col, Container, Row } from "react-bootstrap"


const Portfolio = () => {
  return (
    <section className="sections" id='Portfolio'>
      {/* <PortfolioCard /> */}
      <h1 className="text-center">Portfolio</h1>
      <Resume />
      {/* <FlipCardCard /> */}
      <Container >
        <Row >

          <Col md={5}>
            <ProjectComponent2
              projectCSS={'safariZone'}
              projectName={'The Safari Zone'}
              projectDescription={'A website application where you can randomly encounter pokemon and catch them to add to your pokedex. After catching your pokemon you can interact with them and the pokemon will return a random Joke, Chuck Norris Joke, or inspiration quote'}
              projectTools={'Pokemon API, Joke API,  HTML, Javascript, Materialize'}
              githubLink={'https://github.com/Psong562/SafariZone'}
              githubPages={'https://psong562.github.io/SafariZone'}
            />
          </Col>
          <Col md={{ span: 5, offset: 2 }}>
            <ProjectComponent1
              projectCSS={'animeArchive'}
              projectName={'4AnimeArchive'}
              projectDescription={'A website that includes User authentication using ExpressJWT. Onced authentication the user is allowed to search for your favorite anime and add them to your profile and keep track of your favorite animes'}
              projectTools={'AniList API, Passport, Node, Express, JWT Authentication, MYSQL, HTML, Javascript, Metro4'} 
              githubLink={'https://github.com/Psong562/anotherAnimeArchive.git'}
              herokuLink={'https://anotheranimearchive.herokuapp.com/'}
            />
          </Col>
        </Row>
      </Container>
      <Container  >
        <Row className="justify-content-center" >
          <Col md={5}>

            <ProjectComponent1
              projectCSS={'studyRoom32'}
              projectName={'StudyRoom32'}
              projectDescription={'A website application geared towards studying with lofi music. In this application you can play music with the ability to toggle ambient music(with volume control). The user also has the ability to create notes and save their notes to their profile to access them at a later date. Fidget-cons is a feature added to help user study for those who cant stay still'}
              projectTools={'Mongodb, Express, React, NodeJS, Passport, JWT Authentication,  Javascript, SocketIO, Quill, React Boostrap, Framer Motion'} 
              githubLink={'https://github.com/Psong562/lofiStudyRoom'}
              herokuLink={'https://studyroom32.herokuapp.com/'}
            />
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio

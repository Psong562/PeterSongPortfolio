import React from "react"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Card } from "react-bootstrap"
import '../../portfolio.css'
import projectOne from "../../Assets/projectOne.png"
import projectTwo from "../../Assets/projectTwo.png"
import { AiFillGithub } from "react-icons/ai";


// import PortfolioCard from "./PortfolioCard"


const Projects = () => {
  return (
    <>

      <Container className="projects">
        <Row>
          <Col>
            <Card>
              <Card.Img src={projectOne} alt="imgBackground" />
              <Card.ImgOverlay>
                <Card.Title>
                </Card.Title>

              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <h1>Safari Zone</h1>
            <hr />
            <h4>A website application where you can randomly encounter pokemon and catch them to add to your pokemon. After catching your pokemon you can interact with them and you will get a random Joke, Chuck Norris Joke, or inspiration quote </h4>
            <br />
            <h4>Pokemon API, Joke API,  HTML, Javascript, Materialize</h4>
            <br />
            <h4> Heroku Icon/Computer Icon and Github Icon with links</h4>

            <a
              href="https://github.com/psong562"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>

          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Card>
              <Card.Img src={projectTwo} alt="imgBackground" />
              <Card.ImgOverlay>
                <Card.Title>
                </Card.Title>

              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <h1>4AnimeArchive</h1>
            <hr />
            <h4>A website that allow you to search for your favorite animes and add them to your profile as you watch them.</h4>
            <br />
            <h4>AniList API, Passport.js, Node.js, Express, JWT Authentication, MYSQL, HTML, Javascript, Metro4</h4>
            <br />
            <h4> Heroku Icon/Computer Icon and Github Icon with links</h4>
            <a
              href="https://github.com/psong562"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Projects

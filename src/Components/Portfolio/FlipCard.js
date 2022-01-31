import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Container, Row, Col } from "react-bootstrap"
import "../../App.css"
import { AiFillGithub } from "react-icons/ai";
import { SiHeroku } from "react-icons/si";



import React from 'react';

const FlipCardCard = () => {
  return (

    <Container className="projects">
      <Row>
        <Col md={5} className="cardPadding">
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // // if you pass isFlipped prop component will be controlled component.
            // // and other props, which will go to div
            style={{ width: '500px', height: '300px' }} /// these are optional style, it is not necessary
            className="portCard"
          >
            <FrontSide
              className="safariZone"
            >
              <div className="projCard">
                <h1 className="projText">The Safari Zone</h1>
              </div>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#175852' }}>
              <h6>A website application where you can randomly encounter pokemon and catch them to add to your pokemon. After catching your pokemon you can interact with them and you will get a random Joke, Chuck Norris Joke, or inspiration quote </h6>
              <br />
              <h6>Pokemon API, Joke API,  HTML, Javascript, Materialize</h6>
              <br />
              
              <a
                href="https://github.com/Psong562/SafariZone"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <AiFillGithub size={40}/>
              </a>
            </BackSide>
          </Flippy>

        </Col>
        <Col  md={{ span: 5, offset: 2 }} className="cardPadding">
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // // if you pass isFlipped prop component will be controlled component.
            // // and other props, which will go to div
            style={{ width: '500px', height: '300px' }} /// these are optional style, it is not necessary
            className="portCard"
          >
            <FrontSide
              className="animeArchive"
            >
              <div className="projCard">
                <h1 className="projText">4AnimeArchive</h1>
              </div>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#175852' }}>
              <h6>A website that allow you to search for your favorite animes and add them to your profile as you watch them.</h6>
              <br />
              <h6>AniList API, Passport.js, Node.js, Express, JWT Authentication, MYSQL, HTML, Javascript, Metro4</h6>
              <br />
              
              <a
                href="https://github.com/Psong562/anotherAnimeArchive.git"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"

              >
                <AiFillGithub size={40} />
              </a>
              
              <a
                href="https://anotheranimearchive.herokuapp.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"

              >
                <SiHeroku size={40} />
              </a>
            </BackSide>
          </Flippy>

        </Col>

      </Row>
    </Container>














  )
}

export default FlipCardCard;

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Container, Row, Col, Figure } from "react-bootstrap"
import "../../App.css"
import { AiFillGithub } from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { MdSportsFootball } from "react-icons/md";
import { GiBowlingStrike, GiMountainClimbing } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import "../../App.css"
import headshotImg from "../../Assets/headshot3.png"



import React from 'react';

const AboutFlip = () => {
  return (

    <Container className="projects" >
      <Row>
        <Col className="cardPadding">
          <Flippy
            className="flipCard"
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal" // horizontal or vertical
          // style={{ width: '500px', height: '300px' }} 
          >
            <FrontSide style={{ backgroundColor: '#175852' }} >
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <Figure>
                      <Figure.Image
                        // width={250}
                        // height={100}
                        alt="171x180"
                        src={headshotImg}
                        className='rounded-circle'
                      />

                    </Figure>
                  </Col>
                  <Col xs={12} md={6}>
                    <br />
                    <br />
                    <h1 className='text-center'> Let me <bold className="caps">INTRODUCE</bold> myself</h1>
                    <br />
                    <br />
                    <h4>I graduated from California State University of Long Beach with a Bachelors of Science in Biochemistry. Although i loved sciend, programming allowed me to express myself to a higher degree.</h4>
                    <br />
                    <br />
                    <h4>I am new to programming so I'm looking to learn and grow as much as I can in any way possible</h4>
                  </Col>
                </Row>
              </Container>

            </FrontSide>
            <BackSide
              className="text-center"
              style={{ backgroundColor: '#175852' }}>
              <h1 className="backsideCard" >Getting to <bold className="caps">KNOW</bold> me! </h1>
              <br />
              <br />
              <h4>Other than coding and programing my current <bold className="caps">HOBBIES</bold> are:
                <br />
                <br />
                <ul>
                  <ul><CgGames /> Video Games</ul>
                  <ul><GiMountainClimbing /> Rock Climbing</ul>
                  <ul><GiBowlingStrike /> Bowling</ul>
                  <ul> <MdSportsFootball /> Football... go EAGLES. Fly eagles fly!</ul>
                </ul>
              </h4>
              <br />
              <br />
              <h4>"The future belongs to those who believe in the beauty of their dreams."
              </h4>
              <h6>
                - Shoyo Hinata.
              </h6>
              <br />

              <a
                href="https://github.com/Psong562"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"

              >
                <AiFillGithub size={40} />
              </a>
              &emsp;
              <a
                href="inkedin.com/in/peter-song-06010974"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"

              >
                <FaLinkedinIn size={40} />
              </a>
            </BackSide>
          </Flippy>

        </Col>


      </Row>
    </Container>














  )
}

export default AboutFlip;

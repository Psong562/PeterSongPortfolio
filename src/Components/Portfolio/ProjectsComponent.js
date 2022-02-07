import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Container, Row, Col } from "react-bootstrap"
import "../../App.css"
import { AiFillGithub } from "react-icons/ai";
import { SiHeroku } from "react-icons/si";



import React from 'react';

const ProjectComponent = ({projectCSS, projectName, projectDescription, projectTools, githubLink, herokuLink}) => {
  return (

    <Container className="projects">
      <Row>
        <Col className="cardPadding">
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal" // horizontal or vertical

            style={{ width: '500px', height: '300px' }}
            className="portCard"
          >
            <FrontSide
              className={projectCSS}
            >
              <div className="projCard">
                <h1 className="projText">{projectName}</h1>
              </div>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#175852' }}>
              <h6>{projectDescription}</h6>
              <br />
              <h6>{projectTools}</h6>
              <br />
              
              <a
                href={githubLink}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={40} />
              </a>
              <a
                href={herokuLink}
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

export default ProjectComponent;

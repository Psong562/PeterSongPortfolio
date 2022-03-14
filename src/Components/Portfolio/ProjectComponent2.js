import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Container, Row, Col } from "react-bootstrap"
import "../../App.css"
import { AiFillGithub } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";




import React from 'react';

const ProjectComponent2 = ({ projectCSS, projectName, projectDescription, projectTools, githubLink, githubPages }) => {
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
              <h6>Active Links</h6>

              <a
                href={githubLink}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={40} />
              </a>
              <a
                href={githubPages}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdWebAsset size={40} />
              </a>
            </BackSide>
          </Flippy>

        </Col>


      </Row>
    </Container>



  )
}

export default ProjectComponent2;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../App.css"


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
 
    <Card className="footer">
<Container>
  <Row >
<Col md={5}>
      <Card.Body>Designed and Developed by Peter Song</Card.Body>
</Col>
<Col md={5}>
            <Card.Body>Copyright © {year} PS</Card.Body>
</Col>
<Col md={2}>
      <Card.Body>
              {/* <button href="https://github.com/psong562">  <AiFillGithub /></button>
              <button href="linkedin.com/in/peter-song-06010974">  <FaLinkedinIn /></button> */}
              <p className="social-icons">
                <a
                  href="https://github.com/psong562"
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
                {' '}
                <a
                  href="linkedin.com/in/peter-song-06010974"
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </p>
              
            

              
      </Card.Body>
</Col>
  </Row>
</Container>
    </Card>

  );
}

export default Footer;
import React from 'react';
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import pdf from '../../Assets/Resume-2022.pdf'
import { Container, Row , Col, Button } from 'react-bootstrap';
import '../../App.css'

const Resume = () => {
  return <Container>
    <br />
    <Row>
      <Col xs={4} md={4}></Col>
      <Col xs={4} md={4} className="d-grid gap-2"> 
        
        <Button className="resumeBtn" size="lg" href={pdf} target="_blank">
          <BsFillCloudDownloadFill/>
          {' '}
           Download Resume
          {' '}
          <BsFillCloudDownloadFill />
           </Button>
           
      </Col>
      <Col xs={4} md={4}></Col>
    </Row>
  </Container>
};

export default Resume;

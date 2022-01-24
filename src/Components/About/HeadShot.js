import React from 'react';
import { Container, Card, Row, Col} from 'react-bootstrap';
import avatar from "../../Assets/headshot3.png"

const Headshot = () => {
  return (
   <Container>

    <Row className='d-flex justify-content-center'>
      <Col>
          <Card className='border-0'>
            <Card.Img src={avatar} alt="imgBackground" className='rounded-circle'/>
            <Card.ImgOverlay>
              <Card.Title>
              </Card.Title>

            </Card.ImgOverlay>
          </Card>
        {/* <Figure>
          <Figure.Image
            className="rounded-circle "
            // width={250}
            // height={150}
            alt="171x180"
            src={avatar}
            />
        </Figure> */}
      </Col>
      <Col>

        <Card className="border-0">
          <Card.Body>

            <Card.Text>
              <h1 className='text-center'> Let me <bold>INTRODUCE</bold> myself</h1>
              <h4>I graduated from California State University of Long Beach with a Bachelors of Science in Biochemistry. Although i loved sciend, programming allowed me to express myself to a higher degree.</h4>
              <h4>I am new to programming so I'm looking to learn and grow as much as I can in any way possible</h4>
            </Card.Text>

          </Card.Body>
        </Card>
      </Col>
    </Row>
            </Container>

  )
}

export default Headshot

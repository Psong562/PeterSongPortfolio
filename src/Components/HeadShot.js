import React from 'react';
import { Figure } from 'react-bootstrap';
import avatar from "../Assets/headshot3.png"
import { Card } from 'react-bootstrap';

const Headshot = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div>

      <Figure>
        <Figure.Image
          className="rounded-circle "
          width={250}
          height={150}
          alt="171x180"
          src={avatar}
          />
      </Figure>
          </div>
          <div>

        <Card className="border-0" style={{ width: '40rem' }}>
        <Card.Body>
         
          <Card.Text>
            <h1 className='text-center'> Let me <bold>INTRODUCE</bold> myself</h1>
            <h4>I graduated from California State University of Long Beach with a Bachelors of Science in Biochemistry. Although i loved sciend, programming allowed me to express myself to a higher degree.</h4>
            <h4>I am new to programming so I'm looking to learn and grow as much as I can in any way possible</h4>
          </Card.Text>
          
        </Card.Body>
      </Card>
          </div>
    </div>

  )
}

export default Headshot

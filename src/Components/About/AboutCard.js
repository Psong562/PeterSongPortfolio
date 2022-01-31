import React from 'react';
import Card from "react-bootstrap/Card"
import imgBackground from "../../Assets/pc2.png"
import Type from "../Type.js"




const AboutCard = () => {
  return (
    <Card className="text-white">
      <Card.Img src={imgBackground} alt="imgBackground" />
      <Card.ImgOverlay>
        <Card.Title><h1>Hello</h1></Card.Title>
        <Card.Text>
          <h2>
            <Type />
          </h2>
        </Card.Text>

      </Card.ImgOverlay>
    </Card>



  )
}

export default AboutCard

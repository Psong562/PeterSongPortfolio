import React from 'react';
import Card from "react-bootstrap/Card"
import imgBackground from "../../Assets/letsTalk.png"
import '../../App.css'




const ContactCard = () => {
  return (
    <Card className="text-white">
      <Card.Img src={imgBackground} alt="imgBackground" />
      <Card.ImgOverlay>
        <Card.Title>
          <div>
            <h1 className="d-flex justify-content-center contactTitle">
              Lets Talk!
            </h1>
          </div></Card.Title>

      </Card.ImgOverlay>
    </Card>



  )
}

export default ContactCard

import React from 'react';
import Card from "react-bootstrap/Card"
import imgBackground from "../../Assets/port1.png"
import '../../portfolio.css'




const PortfolioCard = () => {
  return (
    <Card className="text-white">
      <Card.Img src={imgBackground} alt="imgBackground"/>
      <Card.ImgOverlay>
        <Card.Title>
          <div className='d-flex justify-content-end'>
          <h1 id="portTitle">
            Portfolio
            </h1>
            </div></Card.Title>
            
      </Card.ImgOverlay>
    </Card>



  )
}

export default PortfolioCard

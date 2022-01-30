import { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import "../../App.css"
import ContactCard from './ContactCard'
import emailjs from 'emailjs-com'

const Contact = () => {
  const handleSubmitEmail = event =>{
event.preventDefault();
    emailjs.sendForm('service_w2w3dmc', 'template_g8mtfy5', event.target, 'user_BlV08b3TJRwTporhUvp5a')
    .then(res=>{
     console.log(res);
     
    
   }).catch(err=> console.log(err));
 }


    const [emailState, setEmailState] = useState({
      name: '',
      email: '',
      message: '',
     disabled: false,
     emailSent: null,
    })

   const handleInputChange = ({ target: { name, value } }) => setEmailState({ ...emailState, [name]: value })

    // const handleSubmitEmail = event => {
    //   event.preventDefault()
    //   // UserAPI.register({
    //   //   name: emailState.name,
    //   //   email: emailState.email,
    //   //   username: emailState.username,
    //   //   password: emailState.password
    //   // })
    //   setEmailState ({
    //     disabled: true,
    //   })

    //     .then(() => {
    //       alert('User Registered! Please Log In!')
    //       setEmailState({ ...emailState, name: '', email: '', username: '', password: '' })
    //     })
    // }

  //   emailState.handleLoginUser = event => {
  //     event.preventDefault()
  //     UserAPI.login({
  //       username: emailState.lUsername,
  //       password: emailState.lPassword
  //     })
  //       .then(token => {
  //         localStorage.setItem('user', token)
  //         setEmailState({ ...emailState, lUsername: '', lPassword: '' })
  //         window.location = '/'
  //       })


  return (
   <>
    <ContactCard />
    <br />
    <Container fluid className="contactForm m-auto">
      <Row>

        <Col md={{ span: 6, offset: 3 }}>

          <Form onSubmit={handleSubmitEmail}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full-name</Form.Label>
              <Form.Control
                name="name"
                type="name"
                placeholder="Full-name"
                value={emailState.name}
                onChange={handleInputChange} 
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="email"
                value={emailState.email}
                onChange={handleInputChange} 
                />
            </Form.Group>


            <Form.Group className="mb-3" controlId="message" >
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                type="message"
                placeholder="message"
                value={emailState.message}
                onChange={handleInputChange}
                as="textarea" rows={5} 
                />
            </Form.Group>

              <Button variant="primary" type="submit" disabled={emailState.disabled} style={{ backgroundColor: '#175852' }}>
              Submit
            </Button>

            {emailState.emailSent === true && <p className ="d-inline success-msg">Email Sent</p>}
            {emailState.emailSent === false && <p className ="d-inline danger-msg">Email Not Sent</p>}

          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )

}
export default Contact

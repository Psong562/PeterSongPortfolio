import { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import "../../App.css"
// import ContactCard from './ContactCard'
import emailjs from 'emailjs-com'

const Contact = () => {
  const handleSubmitEmail = event => {
    event.preventDefault();
    emailjs.sendForm('service_w2w3dmc', 'template_g8mtfy5', event.target, 'user_BlV08b3TJRwTporhUvp5a')
      .then(res => {
        console.log(res);
        //  alert('Email sent')
        setEmailState({
          // disabled: true,
          emailSent: true
        })

      }).catch(err => console.log(err));
  }


  const [emailState, setEmailState] = useState({
    name: '',
    email: '',
    message: '',
    disabled: false,
    emailSent: null,
  })

  const handleInputChange = ({ target: { name, value } }) => setEmailState({ ...emailState, [name]: value })



  return (
    <section className='sections' id='Contact'>

      <h1 className='text-center'> Let's Connect!</h1>
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
                  placeholder="Email"
                  value={emailState.email}
                  onChange={handleInputChange}
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="message" >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  type="message"
                  placeholder="Message"
                  value={emailState.message}
                  onChange={handleInputChange}
                  as="textarea" rows={5}
                />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={emailState.disabled} style={{ backgroundColor: '#175852' }}>
                Submit
              </Button>

              {emailState.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
              {emailState.emailSent === false && <p className="d-inline danger-msg">Email Not Sent</p>}

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )

}
export default Contact

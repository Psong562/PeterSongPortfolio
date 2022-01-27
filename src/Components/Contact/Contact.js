import { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import "../../App.css"
import ContactCard from './ContactCard'

const Contact = () => {
    const [emailState, setEmailState] = useState({
      name: '',
      email: '',
      message: '',
     disabled: false,
     emailSent: null,
    })

   const handleInputChange = ({ target: { name, value } }) => setEmailState({ ...emailState, [name]: value })

    const handleSubmitEmail = event => {
      event.preventDefault()
      // UserAPI.register({
      //   name: emailState.name,
      //   email: emailState.email,
      //   username: emailState.username,
      //   password: emailState.password
      // })
      setEmailState ({
        disabled: true,
      })

        .then(() => {
          alert('User Registered! Please Log In!')
          setEmailState({ ...emailState, name: '', email: '', username: '', password: '' })
        })
    }

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
            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>Full-Name</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Full-Name"
                value={emailState.Name}
                onChange={handleInputChange} 
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Email"
                value={emailState.Email}
                onChange={handleInputChange} 
                />
            </Form.Group>


            <Form.Group className="mb-3" controlId="Message" >
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="Message"
                placeholder="Message"
                value={emailState.Message}
                onChange={handleInputChange}
                as="textarea" rows={5} 
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled ={emailState.disabled}>
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


import React, { JSXElementConstructor } from "react";
import {Form,Button} from "react-bootstrap";





function ContactUsForm2():JSX.Element{

    return(
        <div className='form-frame'>
        <Form className='contact-form'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            
          <Form.Label>Name</Form.Label>
          <Form.Control size= "sm" type="email" placeholder="Type your name here" />
        </Form.Group>    
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control  size= "sm" type="email" placeholder="Type your email here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Request Here</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='Please,type your request here'/>
        </Form.Group>
        <Button variant="primary" size="lg" className='submit-btn'>
         Submit
        </Button>
      </Form>

      </div>

    )
}

export default ContactUsForm2;






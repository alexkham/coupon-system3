
import React ,{useState} from "react";
import {Card} from "react-bootstrap";
import { SymbolDisplayPartKind } from "typescript";
import './Mycard.css';
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';

function Mycard(props:any): JSX.Element {

   
    return (
       
        <Card >
    
    <Card.Body className='card-body' style={{ backgroundColor: '#0d6efd'}}>
      <Card.Title className='card-title'>{props.action}</Card.Title>
     
      <Card.Text className='card-text'>
          
        {props.path}
      </Card.Text>
      <Link className='card-link' to={props.path}><h2>Go</h2></Link>
     {/* <Card.Link href="#">Another Link</Card.Link>*/}
    </Card.Body>
      </Card>
    

    );
}
{/*<Card
   
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body style={{ backgroundColor:'#0dcaf0' }}>
      <Card.Title> Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    </Card>*/}
export default Mycard;
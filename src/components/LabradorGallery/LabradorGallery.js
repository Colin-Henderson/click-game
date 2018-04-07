import React from "react";
import "./LabradorGallery.css";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody } from 'reactstrap';
 
 const LabradorGallery = (props) => {
   return (
     <div>
     <div>
     <CardGroup>
       <Card>
         <CardImg top width="100%" src={require('./images/lab1.png')} alt="Card image cap" />
       </Card>
       <Card>
         <CardImg top width="100%" src={require('./images/lab2.png')} alt="Card image cap" />
       </Card>
       <Card>
         <CardImg top width="100%" src={require('./images/lab3.png')} alt="Card image cap" />
       </Card>
     </CardGroup>
     </div>
     <div>
          <CardGroup>
       <Card>
         <CardImg top width="100%" src={require('./images/lab4.png')} alt="Card image cap" />
       </Card>
       <Card>
         <CardImg top width="100%" src={require('./images/lab10.png')} alt="Card image cap" />
       </Card>
       <Card>
         <CardImg top width="100%" src={require('./images/lab6.png')} alt="Card image cap" />
       </Card>
     </CardGroup>
     </div>
     <div>
          <CardGroup>
       <Card>
         <CardImg top width="100%" src={require('./images/lab7.png')} alt="Card image cap" />
       </Card>
       <Card>
         <CardImg top width="100%" src={require('./images/lab8.png')} alt="Card image cap" />
       </Card>
       <Card>
         <CardImg top width="100%" src={require('./images/lab9.png')} alt="Card image cap" />
       </Card>
     </CardGroup>
     </div>
     </div>
   );
 };


export default LabradorGallery;

import React from "react";
import { Card, Col } from "react-bootstrap";
import '../styles/image.css';
import CommentaireApp from "../components/CommentaireApp";


const Image = ({ Image }) => {
  return (
    <Col md={4} sm={6} xs={12}>
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
        <Card.Img variant="top" src={Image.Images[0]} />
        <Card.Body>
          <Card.Title className="myStyle">{Image.Title}</Card.Title>
          <Card.Text>{Image.Plot}</Card.Text>
          <p className="myStyle">{Image.Genre}</p>
          <CommentaireApp/> 
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Image;

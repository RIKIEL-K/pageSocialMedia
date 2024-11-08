import React from "react";
import Image from "../components/Image";
import { Row, Container } from "react-bootstrap";

const ImageList = ({ images }) => {
  return (
    <div>
      <Container>
        <Row>
          {images.map((image, index) => (
            <Image key={index} Image={image} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ImageList;

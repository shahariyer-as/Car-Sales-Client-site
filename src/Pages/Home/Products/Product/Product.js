import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
  const { name, color, price, img, _id } = product;
  return (
    <div>
      <Col>
        <Card style={{ width: "23rem" }} className="cards m-2">
          <Card.Img variant="top" height="250px" src={img} />
          <Card.Body>
            <Card.Title>
              <h3>Car : {name}</h3>
            </Card.Title>
            <Card.Title>
              <h6>Price:$.{price}</h6>
            </Card.Title>
            <Card.Title>
              <p>color: {color}</p>
            </Card.Title>
            <Card.Title>
              <Button className=" card-btn">
                {" "}
                <Nav.Link className=" text-light" as={Link} to={`/buy/${_id}`}>
                  Buy Now
                </Nav.Link>
              </Button>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Product;

import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ShowReviews from "../ShowReviews/ShowReviews";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://glacial-escarpment-59764.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const slicedData = data.slice(0, 6);
        setProducts(slicedData);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div>
        <h1 className="my-3">Cars</h1>
        <div className="container my-5">
          <Row xs={1} md={3} className="g-4 ">
            {products?.map((product) => (
              <Col>
                <Card style={{ width: "23rem" }} className="cards m-2">
                  <Card.Img variant="top" height="250px" src={product.img} />
                  <Card.Body>
                    <Card.Title>
                      <h3>Car : {product.name}</h3>
                    </Card.Title>
                    <Card.Title>
                      <h6>Price:$.{product.price}</h6>
                    </Card.Title>
                    <Card.Title>
                      <small>description:{product.description}</small>
                    </Card.Title>
                    <Card.Title>
                      <p>color: {product.color}</p>
                    </Card.Title>
                    <Card.Title>
                      <Button className=" card-btn">
                        {" "}
                        <Nav.Link
                          className=" text-light"
                          as={Link}
                          to={`/buy/${product._id}`}
                        >
                          Buy Now
                        </Nav.Link>
                      </Button>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <ShowReviews></ShowReviews>
      <Footer />
    </div>
  );
};

export default Home;

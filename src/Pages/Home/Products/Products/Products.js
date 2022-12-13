import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Footer from "../../../Shared/Footer/Footer";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://car-sales-server-site.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="container fluid='md' my-5">
        <Row xs={1} md={3} lg={3} className="g-4 ">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;

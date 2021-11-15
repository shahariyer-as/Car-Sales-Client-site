import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://glacial-escarpment-59764.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-4 ">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;
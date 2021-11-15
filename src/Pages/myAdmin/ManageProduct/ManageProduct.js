import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    useEffect(() => {
        fetch("https://glacial-escarpment-59764.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDelete]);

    const handleDelete = (id) => {
        // console.log(id)
        fetch(`https://glacial-escarpment-59764.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setIsDelete(true);
                }
                else {
                    setIsDelete(false);
                }
            });
    };




    return (

        <div>
            <div className="container ">
                <Row xs={1} md={3} className="g-2 ">
                    {
                        products?.map(product => <Col>
                            <Card style={{ width: '18rem', }} className="cards ">
                                <Card.Img variant="top" height="180px" src={product.img} />
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
                                        <Button onClick={() => handleDelete(product._id)} className=" text-light card-btn">Delete</Button>

                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    }
                </Row>

            </div>
        </div>
    );
};

export default ManageProduct;
import React from 'react';
import './Buy.css';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { Alert } from '@mui/material';

const Buy = () => {
    const { user } = useAuth()
    const { buyId } = useParams()
    const [singlePlan, setSinglePlan] = useState({});
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const bookingDetails = data;
        const date = new Date();
        const bookingDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        bookingDetails.date = bookingDate;
        bookingDetails.buyId = singlePlan._id;
        bookingDetails.status = "Pending"
        // console.log(data)

        fetch('https://glacial-escarpment-59764.herokuapp.com/buy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccess(true)

                    reset()
                }
            })

    };

    const getSinglePlan = () => {
        axios.get(`https://glacial-escarpment-59764.herokuapp.com/buying/${buyId}`)
            .then(res => {
                const myPlans = res.data;
                setSinglePlan(myPlans)
                // console.log(myPlans)
            })
    }
    useEffect(() => getSinglePlan(), [])



    return (
        <div className='text-center mt-2'>
            <Nav.Link as={NavLink} to="/userdb"><Button className=" rounded p-2 text-light" style={{ backgroundColor: '#052046' }}>My Dashboard</Button></Nav.Link>
            {/* booking information  */}
            <Container className="my-5">
                <Row className="g-3">
                    <Col md={7}>
                        <Card style={{ width: '23rem', }} className="cards m-2">
                            <Card.Img variant="top" height="250px" src={singlePlan.img} />
                            <Card.Body>
                                <Card.Title>
                                    <h3>Car : {singlePlan.name}</h3>
                                </Card.Title>
                                <Card.Title>
                                    <h6>Price:$.{singlePlan.price}</h6>
                                </Card.Title>
                                <Card.Title>
                                    <small>description:{singlePlan.description}</small>
                                </Card.Title>
                                <Card.Title>
                                    <p>color: {singlePlan.color}</p>
                                </Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>

                    {/* booking form  */}
                    <Col md={5} className='booking-form'>
                        <div className="p-3 form-section">
                            <h3 style={{ backgroundColor: '#052046' }} className="text-light fw-bolder">Buying a Car</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="text-start fw-bold">
                                <label htmlFor="name">Name</label>
                                <br />
                                <input defaultValue={user.displayName} required placeholder="enter your name" {...register("name")} />
                                <br />
                                <label htmlFor="email">Email</label>
                                <br />
                                <input defaultValue={user.email} required placeholder="enter your email" {...register("email")} />
                                <br />
                                <label htmlFor="address">Address</label>
                                <br />
                                <input placeholder="your address" {...register("address")} />
                                <br />
                                <label htmlFor="number">Phone</label>
                                <br />
                                <input placeholder="phone number" {...register("phone")} />
                                <br />
                                <input className=" text-light sub-btn" type="submit" value="Confirm Booking" />
                            </form>
                            {success && <Alert severity="success">Buy Confirm</Alert>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Buy;
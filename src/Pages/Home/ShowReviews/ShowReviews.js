
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowReviews = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch("https://glacial-escarpment-59764.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])


    return (
        <div>
            <h2>User Review</h2>
            <div className="container">
                <hr />
            </div>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-4 ">
                    {
                        reviews?.map(review => <Col>
                            <Card style={{ width: '15rem', }} className="cards m-2">
                                <Card.Body>
                                    <Card.Title>
                                        <h3>Name : {review.name}</h3>
                                    </Card.Title>
                                    <Card.Title>
                                        <h6>comment:{review.comment}</h6>
                                    </Card.Title>

                                    <div> <h6>rating</h6>
                                        <Rating initialRating={review.rating}

                                            readonly></Rating>
                                    </div>


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

export default ShowReviews;
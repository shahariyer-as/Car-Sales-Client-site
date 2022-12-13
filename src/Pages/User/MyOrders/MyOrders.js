import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
// import Navigation from '../../Shared/Navigation/Navigation';

const MyOrders = () => {
  const { user } = useAuth();
  const [userBooking, setUserBooking] = useState([]);

  useEffect(() => {
    const email = [user.email];
    // console.log(email);
    axios
      .post("https://car-sales-server-site.vercel.app/booking/user", email)
      .then((res) => {
        setUserBooking(res.data);
        // console.log('my data', res.data)
      });
  }, [user]);

  return (
    <>
      {/* <Navigation></Navigation> */}
      <div className="my-4">
        <h1 className="my-4  ">My Orders</h1>
        <Row xs={1} md={2} className="g-4 ">
          {userBooking.map((booking) => (
            <Col className="container ">
              <div style={{ backgroundColor: "lightgrey" }} className="rounded">
                <Row xs={1} md={2} className="g-0 p-3">
                  <Col md={4}>
                    <h2>Order list</h2>
                  </Col>
                  <Col>
                    <div className="">
                      <h5>{booking?.name}</h5>
                      <h6>{booking.email}</h6>
                      <h6>{booking.address}</h6>
                      <h6>{booking.date}</h6>
                      <h6>{booking.status}</h6>
                      <div className="d-md-flex align-items-end justify-content-end"></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default MyOrders;

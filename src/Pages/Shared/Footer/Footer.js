import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const addIcon = <FontAwesomeIcon icon={faMapMarker} />
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <div className="my-5">
            <section className="" >
                <div className="row row-cols-1 row-cols-md-3 " style={{ backgroundColor: "#052046" }}>
                    <div className="col">
                        <div className=" h-100">
                            <div className="card-body text-light" >
                                <h5 className=" m-2 card-title">Buying and selling </h5>
                                <p className="card-text  border-top my-3">Find a Car</p>
                                <p className="card-text">Listing by City</p>
                                <p className="card-text">Certified Pre-Order</p>
                                <p className="card-text">Car Payment Calculators</p>
                                <p className="card-text">Car Review and Rating</p>
                                <p className="card-text">Compare Side-by-side</p>
                                <p className="card-text">Fraud Awareness</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" h-100">
                            <div className="card-body text-light" >
                                <h5 className="card-title m-2 ">Our Company </h5>
                                <p className="card-text border-top my-3">About Hero cars.com</p>
                                <p className="card-text">Contract Hero cars.com</p>
                                <p className="card-text">Listening and Resign</p>
                                <p className="card-text">site map</p>
                                <p className="card-text">Feed back</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" h-100">
                            <div className="card-body text-light" >
                                <h5 className=" m-2 card-title ">Contract Info </h5>
                                <ul className="foot-detail-4  border-top my-3">
                                    <p>{addIcon} Hero st new york ny 10004 United states</p>
                                    <p>{envIcon} info@herocar.com</p>
                                    <p>{phnIcon} +123 - 765 - 7645</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mb-3">

                <h1 className="my-3">Hero <span style={{ color: "#052046" }}>Car Shop</span></h1>

                <span>© 2021All right reserved</span>
            </section>
        </div>
    );
};

export default Footer;
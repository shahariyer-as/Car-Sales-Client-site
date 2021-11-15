import React from 'react';

const Services = () => {
    return (
        <div className="container bg-light">
            <section className="container my-5" style={{ color: "#052046" }}>
                <h1 className="text-center">Why Purchase Your Perfect Car From <br /> Our Company</h1>
                <hr />
                <p>Learn why you should consider a Certified Pre-Owned car, and get info on manufacturer programs.</p>
            </section>
            <div className="card-group row row-cols-sm-1 row-cols-md-3 g-2">
                <div className="text-white">
                    <div className="card-body  rounded" style={{ backgroundColor: "#bf3131" }}>
                        <h3 className="card-title py-3">Buy and Sale Vehiclese</h3>
                        <p className="card-text">We buy and sale barand new car and also used car of any brand. Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                    </div>
                </div>
                <div className="text-white">
                    <div className="card-body  rounded" style={{ backgroundColor: "#052046" }}>
                        <h3 className="card-title py-3">Vehicles Rental Service</h3>
                        <p className="card-text">We give the best return service policies and we try to best. View side-by-side comparisons, payment calculators, video reviews, and consumer reviews. These let you hear the good and the bad from current </p>
                    </div>
                </div>
                <div className="text-white">
                    <div className="card-body  rounded" style={{ backgroundColor: "#212a32" }}>
                        <h3 className="card-title py-3">Vehicles Servicing</h3>
                        <p className="card-text">Our servicing is very also get joibs good we try to best. Our very own Cars.com experts offer unbiased coverage of today's automotive landscape. Yes, we have to compes to come out .</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;
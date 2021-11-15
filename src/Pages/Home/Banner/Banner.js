import React from 'react';
import "./Banner.css";

const Banner = () => {

    return (
        <div>
            <div>
                <div className="  img-fluid  max-width: 100%" style={{
                    backgroundImage: `url("https://i.ibb.co/Mc3gS5H/hbanner6.png")`,
                    height: "700px",
                    backgroundSize: "cover",
                    width: "100%"
                }}>
                </div>

            </div>
            <div className="py-5  banner-caption">
                <h1 className="p-3 fs-bold">BUY THE BEST CAR <br /> IN EVER</h1>
                <h4 className="px-3"> Your choice get <br /> your favourite car  </h4>
            </div>

        </div >
    );
};

export default Banner;
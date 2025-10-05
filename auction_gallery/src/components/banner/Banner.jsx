import React from 'react';
import bg_img from '../../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div>
            <div
                className="h-[80vh] flex justify-center items-center"
                style={{
                    backgroundImage: `url(${bg_img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* <div className="hero-overlay"></div> */}
                <div className=" text-neutral-content w-11/12 mx-auto">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5">

                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
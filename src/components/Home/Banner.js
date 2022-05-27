import React from 'react';
import banner from '../../components/assest/Images/banner-bg.jpg'

const Banner = () => {
    return (
        // <div className='container mx-auto'>
        <div className="hero h-96 mt-10" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                    <p className="mb-5 text-white">BANGALI INDUSTRY</p>
                    <p className="mb-5 text-white"> Your Best Rapid Prototyping Services In Bangladesh.</p>
                    <button className="btn btn-primary">Contact us</button>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Banner;
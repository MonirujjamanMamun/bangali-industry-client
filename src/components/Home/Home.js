import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import Review from './Review';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;
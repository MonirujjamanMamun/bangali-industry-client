import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import ProductSold from './ProductSold';
import Review from './Review';
import Subscribe from './Subscribe';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Subscribe></Subscribe>
            <ProductSold></ProductSold>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import customers from '../../components/assest/Images/customers.jpg';
import annualRevenue from '../../components/assest/Images/Annual revenue.jpg';
import reviews from '../../components/assest/Images/reviews.jpg';
import tools from '../../components/assest/Images/tools.jpg';


const BusinessSummary = () => {
    return (
        <div className="container my-14 px-6 mx-auto">
            <h1 className='text-3xl font-bold text-gray-800 text-center mb-10'>Business Summary</h1>
            <section className="mb-32 text-gray-800 text-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
                    <div className="mb-12 lg:mb-0 relative">

                        <img className=" w-24 h-24 text-blue-600 mx-auto mb-6" src={customers} alt="customers" />
                        <h5 className="text-lg text-blue-600 font-bold mb-4">100+</h5>
                        <h6 className="font-medium text-gray-500">customers</h6>
                        <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                    </div>

                    <div className="mb-12 lg:mb-0 relative">
                        <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={annualRevenue} alt="annualRevenue" />
                        <h5 className="text-lg text-blue-600 font-bold mb-4">120M+</h5>
                        <h6 className="font-medium text-gray-500">Annual Revenue</h6>
                        <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                    </div>

                    <div className="mb-12 md:mb-0 relative">
                        <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={reviews} alt="reviews" />
                        <h5 className="text-lg text-blue-600 font-bold mb-4">33K+</h5>
                        <h6 className="font-medium text-gray-500">Reviews</h6>
                        <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                    </div>

                    <div className="relative">

                        <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={tools} alt="tools" />
                        <h5 className="text-lg text-blue-600 font-bold mb-4">50+</h5>
                        <h6 className="font-medium text-gray-500 mb-0">Tools</h6>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default BusinessSummary;
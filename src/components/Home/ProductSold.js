import React from 'react';

const ProductSold = () => {
    return (
        <section className=''>
            <div className="container mx-auto">
                <h4 className="mt-4 mb-5 text-3xl text-center my-20">Where Our Clients Products Are Sold</h4>

                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 sm:text-center">
                        <div className="">
                            <div className="hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img src="https://www.rocheindustry.com/wp-content/uploads/2020/02/target-logo.png"
                                    className="w-32 p-4" />
                            </div>
                        </div>

                        <div className="">
                            <div className="hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img src="https://www.rocheindustry.com/wp-content/uploads/2020/02/walmart-logo-440x220.png"
                                    className="w-32 p-4" />
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img src="https://www.rocheindustry.com/wp-content/uploads/2020/02/Best-buy-logo-2000x1000.jpg"
                                    className="w-32 p-4" />
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img src="https://www.rocheindustry.com/wp-content/uploads/2020/02/homedepot-logo-412x206.jpg"
                                    className="w-32 p-4" />
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img src="https://www.rocheindustry.com/wp-content/uploads/2020/02/Amazon-logo-596x298.jpg"
                                    className="w-32 p-4" />
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                data-mdb-ripple-color="light">
                                <img src="https://www.rocheindustry.com/wp-content/uploads/2020/02/ebay-logo-850x425.jpg"
                                    className="w-32 p-4" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSold;
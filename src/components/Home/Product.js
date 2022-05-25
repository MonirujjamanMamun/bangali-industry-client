import React from 'react';

const Product = ({ product }) => {
    console.log(product)
    const { name, img, } = product;
    return (
        <div>
            <h1>product</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Product;
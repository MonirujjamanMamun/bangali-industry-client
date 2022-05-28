import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, description, available_quantity, minimum_quantity, unit_price, _id } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Available Quantity: {available_quantity}</p>
                <p>Minimum Quantity: {minimum_quantity}</p>
                <p>Unit Price: ${unit_price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/purchase/${_id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
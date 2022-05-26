import React, { useEffect, useState } from 'react';
import Product from './Product';



const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-3xl my-16 font-bold'>All Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
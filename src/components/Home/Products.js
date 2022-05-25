import React, { useEffect, useState } from 'react';
import Product from './Product';



const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    console.log(products)

    return (
        <div>
            {products.map(product => <Product key={product._id} product={product}></Product>)}
        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import { QueryClient, useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';



const Products = () => {
    const queryClient = new QueryClient()
    /* 
        const { data, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
            method: 'GET',
        }).then(res => res.json()));
    
        if (isLoading) {
            return <Loading></Loading>
        }
        console.log(data)
         */
    /* 
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:5000/products')
                .then(res => res.json())
                .then(data => setProducts(data))
        }, [products])
     */
    return (
        <div>
            {/* {products.map(product => <Product key={product._id} product={product}></Product>)} */}
        </div>
    );
};

export default Products;
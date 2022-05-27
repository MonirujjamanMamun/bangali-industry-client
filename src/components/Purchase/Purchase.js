import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import PurchaseForm from './PurchaseForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    console.log(id)
    const { isLoading, error, data: product } = useQuery('product', () =>
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    const { name, img, description, available_quantity, minimum_quantity, unite_price, _id } = product;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto mt-16'>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Available Quantity: {available_quantity}</p>
                    <p>Minimum Quantity: {minimum_quantity}</p>
                    <p>Unit Price: ${unite_price}</p>
                </div>
            </div>
            <div>
                <PurchaseForm
                    product={product}
                    user={user}
                />
            </div>
        </div>
    );
};

export default Purchase;
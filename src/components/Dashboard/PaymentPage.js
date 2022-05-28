import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const PaymentPage = () => {
    const { id } = useParams()
    const { isLoading, error, data: order } = useQuery('order', () =>
        fetch(`https://frozen-scrubland-19208.herokuapp.com/order/${id}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>;
    }
    const stripePromise = loadStripe('pk_test_51L47IwKLivP7yRsGuMdTwmu9ZZZ0uWk0a8UHBNHl2wYc9uucugWAiBcHGJHFYVVtXFFzhbgcNkkppVVCJaWeSWcj00WsB9J4Od');
    const { name, totalPrice, quantity } = order;
    return (
        <div className='px-20'>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> {name}</h2>
                    <p>Quantity:{quantity}</p>
                    <p>Price:{totalPrice}</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
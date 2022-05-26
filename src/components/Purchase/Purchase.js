import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams()
    const { isLoading, error, data: product } = useQuery('product', () =>
        fetch(`http://localhost:5000/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    console.log(product)

    return (
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        fetch(`https://frozen-scrubland-19208.herokuapp.com/reviews`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <section className="mb-20 text-gray-700">
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto my-5">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Review</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
                {
                    reviews.map(review => <ReviewRow
                        review={review}
                        key={review._id}
                    ></ReviewRow>)
                }

            </div>
        </section>
    );
};

export default Review;
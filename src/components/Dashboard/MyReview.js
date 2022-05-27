import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth)
    const handleForm = (e) => {
        e.preventDefault()
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const name = user.displayName;
        const reviewData = { rating, description, name };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully add review!')
                    e.target.reset()
                }
            })

    }
    return (
        <div className='w-full mt-8 px-6'>
            <h2 className='text-3xl font-bold mb-10'>Order Form</h2>
            <form className='flex flex-col gap-4' onSubmit={handleForm}>
                <input name='rating' type="number" placeholder="Rating" class="input input-bordered w-full max-w-xs" required />
                <textarea name='description' class="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
                <input type="submit" value={'Add Review'} class="btn btn-primary max-w-xs "
                />
            </form>
        </div>
    );
};

export default MyReview;
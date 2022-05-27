import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const { isLoading, error, data: myorders } = useQuery('myorders', () =>
        fetch(`https://frozen-scrubland-19208.herokuapp.com/orders?email=${email}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='w-full'>
            <div class="overflow-x-auto ">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Total Price</th>
                            <th>Order Details</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((order, index) => <MyOrderRow
                                key={order._id}
                                order={order}
                                num={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
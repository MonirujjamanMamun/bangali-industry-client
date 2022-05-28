import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [data, setData] = useState({})
    const email = user?.email;
    const { isLoading, error, data: myorders, refetch } = useQuery('myorders', () =>
        fetch(`https://frozen-scrubland-19208.herokuapp.com/orders?email=${email}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        fetch(`https://frozen-scrubland-19208.herokuapp.com/order/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Delete successful')
                    refetch()
                }
            })

    }

    return (
        <div className='w-full'>
            <div className="overflow-x-auto ">
                <table className="table w-full">
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
                                setData={setData}
                            />)
                        }
                    </tbody>
                </table>
                <div><input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure?</h3>
                            <p className="py-4">You've been delete {data.name}</p>
                            <div className="modal-action">
                                <label for="my-modal-6" className="btn">Cancle</label>
                                <label for="my-modal-6" onClick={() => handleDelete(data._id)} className="btn">Delete</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyOrders;
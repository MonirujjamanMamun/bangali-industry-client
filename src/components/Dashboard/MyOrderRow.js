import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrderRow = ({ order, num }) => {
    const navigate = useNavigate()
    const { name, totalPrice, status, _id } = order;
    return (
        <tr>
            <th>{num + 1}</th>
            <td>{name}</td>
            <td>{totalPrice}</td>
            <td>{status}</td>
            <td>{status === 'unpaid' ? <button onClick={() => navigate(`/payment/${_id}`)} className='btn btn-sm'>Pay</button> : status === 'paid' && status}</td>
            <td><button className='btn btn-sm'>Delete</button></td>
        </tr>
    );
};

export default MyOrderRow;
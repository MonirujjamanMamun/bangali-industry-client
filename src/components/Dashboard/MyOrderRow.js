import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrderRow = ({ order, num, setData }) => {
    const navigate = useNavigate()
    const { name, totalPrice, status, _id, transactionId } = order;
    return (
        <tr>
            <th>{num + 1}</th>
            <td>{name}</td>
            <td>{totalPrice}</td>
            <td>{status}</td>
            <td>{status === 'unpaid' ? <button onClick={() => navigate(`/payment/${_id}`)} className='btn btn-sm'>Pay</button> : status === 'paid' && <>
                <p>{status}</p>
                <p>{transactionId}</p>
            </>}</td>
            <td><label onClick={() => setData({ name, _id })} for="my-modal-6" className="btn  btn-sm" disabled={status === 'paid' ? true : false}>Delete</label>
            </td>
        </tr>
    );
};

export default MyOrderRow;
import React from 'react';

const MyOrderRow = ({ order, num }) => {
    const { name, totalPrice, status, _id } = order;
    return (
        <tr>
            <th>{num + 1}</th>
            <td>{name}</td>
            <td>{totalPrice}</td>
            <td>{status}</td>
            <td><button className='btn btn-sm'>Delete</button></td>
        </tr>
    );
};

export default MyOrderRow;
import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, num, refetch }) => {
    const { name, email, role } = user;
    const handleAdmin = () => {
        fetch(`https://frozen-scrubland-19208.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ role: 'admin' })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Successfully!')
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{num + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><button onClick={handleAdmin} className='btn btn-sm' disabled={role === 'admin' ? true : false}>Make Admin</button></td>
        </tr>
    );
};

export default MakeAdminRow;
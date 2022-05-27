import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [profile, setProfile] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setProfile(data))
        }
    }, [user, profile])


    const { name, email, education, location, linkedin, phone } = profile;
    const handleForm = (e) => {
        e.preventDefault()
        const location = e.target.location.value;
        const education = e.target.education.value;
        const phone = e.target.phone.value;
        const linkedin = e.target.linkedin.value;
        const updateUser = { education, location, phone, linkedin };
        console.log(updateUser)
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Successfully!')
                    e.target.reset()
                }
            })

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <div className='gap-4 flex flex-col'>
                <h2>Name:{name}</h2>
                <h4>Email:{email}</h4>
                <p>Education:{education ? education : 'not available'}</p>
                <p>Location:{location ? location : 'not available'}</p>
                <p>Phone:{phone ? phone : 'not available'}</p>
                <p>LInkedIn:{linkedin ? linkedin : 'not available'}</p>
            </div>
            <div className='w-full px-10'>
                <h2 className='text-3xl font-bold mb-4'>Profile</h2>
                <form className='flex flex-col gap-4' onSubmit={handleForm}>
                    <input name='education' type="text" placeholder="Education" class="input input-bordered w-full max-w-lg" required />
                    <input name='location' type="text" placeholder="Location" class="input input-bordered w-full max-w-lg" required />
                    <input name='phone' type="tel" placeholder="Phone" class="input input-bordered w-full max-w-lg" required />
                    <input name='linkedin' type="text" placeholder="LInkedin Profile Link" class="input input-bordered w-full max-w-lg" />

                    <input type="submit" value={'Update Profile'} class="btn btn-primary max-w-2xl " />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
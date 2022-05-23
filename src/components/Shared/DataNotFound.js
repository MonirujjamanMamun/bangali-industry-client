import React from 'react';
import notfoundpic from '../../components/assest/Images/dribbble_1.gif';

const DataNotFound = () => {
    return (
        <div className=''>
            <h1 className='text-3xl text-center mt-5'>Data Not Found</h1>
            <h1 className='text-3xl text-center mt-5'>404</h1>
            <div className='w-96 mx-auto'>
                <img className='w-full' src={notfoundpic} alt="data-not-found" />
            </div>
        </div>
    );
};

export default DataNotFound;
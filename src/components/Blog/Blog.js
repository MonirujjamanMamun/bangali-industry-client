import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-11/12 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1 className='text-xl font-bold'>Improve the performance of a React Application</h1>
                <p>Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import Windowing or list virtualization in React. Lazy loading images in React.</p>
            </div>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1>Improve the performance of a React Application?</h1>
                <p>Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import Windowing or list virtualization in React. Lazy loading images in React.</p>
            </div>
            <div className='rounded-lg shadow-lg bg-white p-3 text-justify'>
                <h1>Improve the performance of a React Application?</h1>
                <p>Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import Windowing or list virtualization in React. Lazy loading images in React.</p>
            </div>

            <div></div>
            <div></div>
        </div>
    );
};

export default Blog;
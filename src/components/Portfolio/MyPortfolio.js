import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-7">
                <div className='rounded-lg shadow-lg bg-white p-7 ml-5'>
                    <h2 className="card-title font-bold">Name : Monirujjaman Monir</h2>
                    <p><span className='font-bold'>E-mail</span>: monirujjamanmamun2357@gmail.com</p>
                    <h3 className='text-lg font-bold'>Bachelor of Arts(Hons) Bangla</h3>
                    <p>Grade achiev: 2022</p>

                </div>
                <div className='rounded-lg shadow-lg bg-white p-7 ml-5 '>
                    <h3 className='text-lg font-bold text-center'>List of Technologies : </h3>
                    <ul className='ml-8'>
                        <li><span>HTML</span></li>
                        <li><span>CSS</span></li>
                        <li><span>Bootstrap css</span></li>
                        <li><span>Tailwind css</span></li>
                        <li><span>JavaScript</span></li>
                        <li><span>DOM Manipulation</span></li>
                        <li><span>JSON</span></li>
                        <li><span>AJAX</span></li>
                        <li><span>React.js</span></li>
                        <li><span>Node.js</span></li>
                        <li><span>Express.js</span></li>
                        <li><span>MongoDB</span></li>
                        <li><span>Git</span></li>
                    </ul>
                </div>
                <div className='rounded-lg shadow-lg bg-white p-7 ml-5 text-center'>
                    <ul>
                        <h3 className='text-lg font-bold'>My Projects Link</h3>
                        <li><a target='_blank' href='https://monitor-warehouse.firebaseapp.com/'>Site-1</a></li>
                        <li><a target='_blank' href='https://assignment-ten-3f25b.web.app/'>Site-2</a></li>
                        <li><a target='_blank' href='https://motor-house-monirujjaman.netlify.app/'>Site-3</a></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;
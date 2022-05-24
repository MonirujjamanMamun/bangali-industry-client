import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='myorder'>My Orders</Link></li>
                        <li><Link to='myreview'>My Review</Link></li>
                        <li><Link to='myprofile'>My Profile</Link></li>
                        <li><Link to='addproduct'>Add Product</Link></li>
                        <li><Link to='makeadmin'>Make Admin</Link></li>
                        <li><Link to='manageproducts'>Manage Products</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
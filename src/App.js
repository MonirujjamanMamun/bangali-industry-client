import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DataNotFound from './components/Shared/DataNotFound';
import Blog from './components/Blog/Blog';
import Navebar from './components/Shared/Navebar';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/LogIn/SignUp';
import MyPortfolio from './components/Portfolio/MyPortfolio';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import MyReview from './components/Dashboard/MyReview';
import MyProfile from './components/Dashboard/MyProfile';
import AllOrders from './components/Dashboard/AllOrders';
import AddProduct from './components/Dashboard/AddProduct';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageProducts from './components/Dashboard/ManageProducts';
import Purchase from './components/Purchase/Purchase';
import RequareAuth from './components/Shared/RequareAuth';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import RequareAdmin from './components/Shared/RequareAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentPage from './components/Dashboard/PaymentPage';

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/purchase/:id' element={<RequareAuth><Purchase></Purchase></RequareAuth>}></Route>
        <Route path='/payment/:id' element={<RequareAuth><PaymentPage></PaymentPage></RequareAuth>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>

          {/* <Route path='allorders' element={<AllOrders></AllOrders>}></Route> */}
          <Route path='manageallorders' element={<RequareAdmin><ManageAllOrders></ManageAllOrders></RequareAdmin>}></Route>
          <Route path='addproduct' element={<RequareAdmin><AddProduct></AddProduct></RequareAdmin>}></Route>
          <Route path='makeadmin' element={<RequareAdmin><MakeAdmin></MakeAdmin></RequareAdmin>}></Route>
          <Route path='manageproducts' element={<RequareAdmin><ManageProducts></ManageProducts></RequareAdmin>}></Route>

        </Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;

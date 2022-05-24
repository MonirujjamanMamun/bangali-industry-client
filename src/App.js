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

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allorders' element={<AllOrders></AllOrders>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

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

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

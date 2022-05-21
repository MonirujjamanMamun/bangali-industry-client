import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DataNotFound from './components/Shared/DataNotFound';
import Blog from './components/Blog/Blog';
import Navebar from './components/Shared/Navebar';

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/datanotfound' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

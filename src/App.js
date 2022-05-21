import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DataNotFound from './components/Shared/DataNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/datanotfound' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

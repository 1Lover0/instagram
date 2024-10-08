import React from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Username from './pages/username/Username';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className='d-flex'>
        <Navbar />
        {/* <div>
          dae
        </div> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
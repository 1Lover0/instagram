import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Username from './pages/username/Username'
import Navbar from './component/navbar/Navbar'
import Explore from './pages/explore/Explore'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/username' element={<Username />} />
        </Routes>
    </div>
  )
}

export default App
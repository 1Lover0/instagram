import React from 'react';
import Login from './pages/login/Login';
import Footer1 from './components/footer/Footer1';
import Home from './pages/home/Home';
import Username from './pages/username/Username';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/signup',
      element:<Home />
    },
    {
      path:'/username',
      element: <Username />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
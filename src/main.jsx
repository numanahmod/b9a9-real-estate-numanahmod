import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';





import ErrorPage from './Components/ErrorPage';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import ProfileUpdate from './Pages/ProfileUpdate';
import ViewProperties from './Pages/ViewProperties';

import Register from './Pages/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import YourAccountLogIn from './Pages/YourAccountLogIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        element: <Home/>,
        loader: () => fetch('/estate.json')
      },
      {
          path: "/property/:Id",
          element: <PrivateRoute><ViewProperties></ViewProperties></PrivateRoute>,
          loader: () => fetch('/estate.json')
      },
      
      {
        path: "/profileUpdate",
        loader: () => fetch('/estate.json'),
        element: <ProfileUpdate></ProfileUpdate>,
        
      },
      
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      
      {
        path: "/register",
        element: <Register> </Register>
      },
      {
        path: "/yourAccountLogin",
        element: <YourAccountLogIn></YourAccountLogIn>
      },
      
     

    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import PostJob from './components/PostJob.jsx';
import MyJobs from './components/MyJobs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/postJob',
        element:<PostJob></PostJob>

      },
      {
        path:'/myJobs',
        element:<MyJobs></MyJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Phones from './components/Phones';
import SinglePhone from './components/SinglePhone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/phone/:id',
        element:<SinglePhone></SinglePhone>,
        loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

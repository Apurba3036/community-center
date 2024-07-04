import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home';
import Detalis from './Pages/Detalis';
import Aboutus from './Pages/Aboutus';
import Team from './Pages/Team';

import Contact from './Pages/Contact';

import Blogs from './Pages/Blogs';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/details",
        element:<Detalis></Detalis>
      },
      {
        path: "/about",
        element:<Aboutus></Aboutus>
      },
      {
        path: "/member",
        element:<Team></Team>
      },
      
      
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      
      {
        path: "/blogs",
        element:<Blogs></Blogs>,
        

      }
      
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-6xl mx-auto p-3 md:p-0 lg:p-0'>
<React.StrictMode>
 
  
    <RouterProvider router={router} />
    
  
  </React.StrictMode>,
</div>
)

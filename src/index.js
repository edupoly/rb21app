import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Courses from './Courses';
import Contactus from './Contactus';
import NewBatches from './NewBatches';
import Reactjs from './Reactjs';
import Angular from './Angular';
import Nodejs from './Nodejs';
import CourseDetails from './CourseDetails';
import Countries from './Countries';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/countries',
        element:<Countries></Countries>
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        children:[
          {
            path:"/courses/:cname",
            element:<CourseDetails></CourseDetails>
          }
        ]
      },
      {
        path:'/newbatches',
        element:<NewBatches></NewBatches>
      },
      {
        path:'/contactus',
        element:<Contactus></Contactus>
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <RouterProvider router={router}></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

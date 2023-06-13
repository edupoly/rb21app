import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import CountryDetails from './features/countries/CountryDetails';
import Products from './features/products/Products';
import Students from './features/students/Students';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/counter',
        element:<Counter></Counter>
      },
      {
        path:'/todolist',
        element:<Todolist></Todolist>
      },
      {
        path:'/countries',
        element:<Countries></Countries>
      },
      {
        path:'/countryDetails/:cname',
        element:<CountryDetails></CountryDetails>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/students',
        element:<Students></Students>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

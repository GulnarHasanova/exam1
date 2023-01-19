import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import Common from "./Pages/Common"
import Home from './Pages/Home'
import Add from './Pages/Add'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Common/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "add",
        element: <Add/>,
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


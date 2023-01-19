import React from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
function Index() {
  return (
  <>

   <Navbar/>
   <Outlet/>
  
  </>
  )
}

export default Index
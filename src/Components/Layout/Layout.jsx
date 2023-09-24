import React from 'react'
import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Layout() {
      //logout
     let navigate= useNavigate();
      function logOut() {
        localStorage.removeItem('userToken');
        navigate("login");
        console.log('tureLogin');
      
  
        }
  return <>
  <Navbar logOut={logOut}  />

  <div className="container">
    <Outlet></Outlet>
  </div>
  <Footer/>
  
  </>
}

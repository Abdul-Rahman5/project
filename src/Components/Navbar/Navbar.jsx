import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
export default function Navbar({logOut}) {
  return <>
  <nav className="navbar    navbar-expand-sm navbar-light bg-body">
      <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navBoot navbar-collapse" id="collapsibleNavId">
        <div className="   d-flex justify-content-evenly w-50">
        <ul className="navbar-nav start   mt-2 mt-lg-0">
         
         <li className="nav-item d-flex align-items-center">
         <i className="fa-regular fa-circle-user"></i>
          
         </li>

         <li className="nav-item d-flex align-items-center">
       
           <Link className="nav-link" to="">مساعده ؟</Link>
         </li>
         
       </ul>
          
        </div>
        <div className="end col-sm-12    w-50 ">
          <div className="box d-flex justify-content-end justify-content-around">
          <ul className="navbar-nav d-flex items  w-50 align-items-center d-flex justify-content-end   mt-2 mt-lg-0">
         
          <li className="nav-item">
           <Link className="nav-link" to="">
            <img src="" alt="" />
           </Link>
         </li>
         <li className="nav-item">
           <a className="nav-link  "  onClick={logOut}>   تسجيل الخروج  </a>
         </li>
         <li className="nav-item">
           <Link className="nav-link  " to="">  اعرف <i className="fa-solid fa-location-dot "></i></Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="">   ابحث  <i className="fa-solid fa-magnifying-glass "></i></Link>
         </li>
         
          </ul>
          <div className="img">
            <img className='w-50' src={logo} alt="" />
          </div>
          </div>
         
           
         
        </div>
      </div>
    </div>
  </nav>
  
  
  </>
}

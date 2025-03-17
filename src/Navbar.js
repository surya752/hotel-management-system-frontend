import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./FrontPages/Home";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
// class Navbar extends Component {
//     render(){
//         return(
//             <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <Link to={"/"} className="navbar-brand">
//           Hotel Management System
//         </Link>
//         <div className="navbar-nav ml-auto">
//           <li className="nav-item">
//                   <Link to={"/"} className="nav-link active ">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//                 <Link to={"/contact"} className="nav-link">
//                   Contact
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to={"/Button"} className="nav-link">
//                   Login/Register
//                 </Link>
//               </li> 
//             </div>
//             </nav>
        
//             </div>
//         )
//     }
// }
// export default Navbar


function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3> Hotel Management System</h3>
      <nav ref={navRef}>
        <Link to={"/"} className="nav-link active ">Home</Link>
        <Link to={"/contact"} className="nav-link">Contact</Link>
        <Link to={"/Button"} className="nav-link"> Login</Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function ManagerDashboard() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (

    < header >
      <span> <h5><b>Hotel*Management</b></h5></span>
      <nav ref={navRef}>
        <Link to={"/MListEmployeeComponent"} className="nav-link active "> Employee</Link>
        <Link to={"/MListInventoryReportsComponent"} className="nav-link"> InventoryReports</Link>
        <Link to={"/MListRoomComponents"} className="nav-link">Room </Link>
        <Link to={"/MListReservationComponent"} className="nav-link">Reservations </Link>
        <Link to={"/Button"} className="nav-link" > LogOut </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header >
  )
}
export default ManagerDashboard
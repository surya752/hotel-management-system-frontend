import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbar.css";
function OwnerDashboard() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (

    <header>
      <span> <h5><b>Hotel*Management</b></h5></span>
      <nav ref={navRef}>
        <Link to={"/ListEmployeeComponent"} className="nav-link active "> Employee</Link>
        <Link to={"/ListInventoryReportsComponent"} className="nav-link"> InventoryReports</Link>
        <Link to={"/ListRoomComponent"} className="nav-link">Room </Link>
        <Link to={"/ListReservationComponent"} className="nav-link">Reservations </Link>
        <Link to={"/ListSetRatesComponent"} className="nav-link">SetRates</Link>
        <Link to={"/ListGuestComponent"} className="nav-link">Guest</Link>
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
    </header>
  )
}
export default OwnerDashboard
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function ReceptionDashboard() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (

    < header >
      <span> <h5><b>Hotel*Management</b></h5></span>
      <nav ref={navRef}>
        <Link to={"/RListReservationComponent"} className="nav-link active "> Reservation</Link>
        <Link to={"/RListGuestComponent"} className="nav-link">Guest</Link>
        <Link to={"/RListRoomComponent"} className="nav-link"> Rooms</Link>
        <Link to={"/RListPaymentComponents"} className="nav-link"> Payment</Link>
        <Link to={"/RListBillComponents"} className="nav-link"> Issue Bills</Link>
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
export default ReceptionDashboard;
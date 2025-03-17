import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReservationService from "../../BackendService/ManagerService/ReservationService"
import ManagerDashboard from '../../Dashboard/ManagerDashboard'

const MListReservationComponent = () => {
    const [reservation, setReservation] = useState([])

    useEffect(() => {
        getAllReservation();
    }, [])

    const getAllReservation = () => {
        ReservationService.getAllReservation().then((response) => {
            setReservation(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteRservationById = (reservationId) => {
        console.log(reservationId);
        ReservationService.deleteRservationById(reservationId).then((response) => {

            getAllReservation();
        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div>
            <ManagerDashboard />
            <div className="container">
                <h2 className="text-center"> List Reservation </h2>
                <Link to="/Madd-reservation" className="btn btn-primary mb-2" > Add Reservation </Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th> Reservation Id </th>
                        <th> RoomNo </th>
                        <th> Children </th>
                        <th> adult</th>
                        <th> CheckIn</th>
                        <th> CheckOut</th>
                        <th> Actions </th>
                    </thead>
                    <tbody>
                        {
                            reservation.map(
                                reservation =>
                                    <tr key={reservation.id}>
                                        <td> {reservation.id} </td>
                                        <td> {reservation.roomNo} </td>
                                        <td>{reservation.children}</td>
                                        <td>{reservation.adults}</td>
                                        <td>{reservation.checkindate}</td>
                                        <td>{reservation.checkoutdate}</td>
                                        <td>
                                            <Link className="btn btn-info" to={`/Mupdatereservation/${reservation.id}`} >Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteRservationById(reservation.id)}
                                                style={{ marginLeft: "10px" }}> Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MListReservationComponent

import GuestService from "../../BackendService/OwnerService/GuestService"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwnerDashboard from "../../Dashboard/OwnerDashboard"

const ListGuestComponent = () => {

    const [guest, setGuest] = useState([])

    useEffect(() => {

        getAllGuest();
    }, [])

    const getAllGuest = () => {
        GuestService.getAllGuest().then((response) => {
            setGuest(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteGuest = (guestId) => {
        console.log(guestId);
        GuestService.deleteGuest(guestId).then((response) => {

            getAllGuest();

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div>
            <OwnerDashboard />
            <div className="container">
                <h2 className="text-center"> List Guest </h2>
                <Link to="/add-guest" className="btn btn-primary mb-2" > Add Guest </Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th> Guest Id </th>
                        <th> Guest  Name </th>
                        <th> RoomNo </th>
                        <th> Phone</th>
                        <th> Email</th>
                        <th> Gender</th>
                        <th> Address</th>

                        <th> Actions </th>
                    </thead>
                    <tbody>
                        {
                            guest.map(
                                guest =>
                                    <tr key={guest.id}>
                                        <td> {guest.id} </td>
                                        <td> {guest.name} </td>
                                        <td>{guest.roomNo}</td>
                                        <td>{guest.phoneNo}</td>
                                        <td>{guest.email}</td>
                                        <td>{guest.gender}</td>
                                        <td>{guest.address}</td>
                                        <td>
                                            <Link className="btn btn-info" to={`/updateguest/${guest.id}`} >Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteGuest(guest.id)}
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

export default ListGuestComponent

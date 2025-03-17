import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RoomService from "../../BackendService/OwnerService/RoomService"
import OwnerDashboard from '../../Dashboard/OwnerDashboard'

const ListRoomComponents = () => {
    const [search, setSearch] = useState('');

    const [room, setRoom] = useState([])
    useEffect(() => {

        getAllRooms();
    }, [])

    const getAllRooms = () => {
        RoomService.getAllRooms().then((response) => {
            setRoom(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteRoomById = (roomId) => {
        console.log(roomId);
        RoomService.deleteRoomById(roomId).then((response) => {

            getAllRooms();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div>
            <OwnerDashboard />
            <div className="container">
                <br />
                {/* <button className='btn btn-info mb-2' style={{ marginLeft: "8px", padding: "2px 20px" }}>Filter</button> */}

                <h2 className="text-center"> List Rooms </h2>
                <Link to="/add-room" className="btn btn-primary mb-2" > Add Room </Link>
                <input style={{ marginLeft: "808px" }} type="text" value={search} placeholder='filterRooms' onChange={(e) => setSearch(e.target.value)} />
                <table className="table table-bordered table-striped">
                    <thead>
                        <th> Room Id </th>
                        <th> RoomNo </th>
                        <th> RoomType </th>
                        <th> IsOccupied</th>
                        <th> RoomCost</th>
                        <th> CheckIn</th>
                        <th> CheckOut</th>
                        <th> Actions </th>
                    </thead>
                    <tbody>
                        {
                            room.filter(val => val.isOccupied.toLowerCase().includes(search.toLowerCase())).map(
                                room =>
                                    <tr key={room.id}>
                                        <td> {room.id} </td>
                                        <td> {room.roomNo} </td>
                                        <td>{room.roomType}</td>
                                        <td>{room.isOccupied}</td>
                                        <td>{room.roomCost}</td>
                                        <td>{room.checkIn}</td>
                                        <td>{room.checkOut}</td>

                                        <td>
                                            <Link className="btn btn-info" to={`/updateroom/${room.id}`} >Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteRoomById(room.id)}
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
export default ListRoomComponents
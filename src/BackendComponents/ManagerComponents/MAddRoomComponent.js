import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import RoomService from '../../BackendService/ManagerService/RoomService'

export const MAddRoomComponents = () => {

    const [roomNo, setRoomNo] = useState("")
    const [roomType, setRoomType] = useState("")
    const [isOccupied, setIsOccupied] = useState("")
    const [roomCost, setRoomCost] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const initialValues = { roomNo: "", roomType: "", isOccupied: "", checkIn: "", checkOut: "" };
    const [formValues] = useState(initialValues);
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateRoom = (e) => {
        e.preventDefault();

        const room = { roomNo, roomType, isOccupied, roomCost, checkIn, checkOut }
        setFormErrors(validate(room));
        setIsSubmit(true);
        if (id) {
            RoomService.updateRoombyId(id, room).then((response) => {
                history.push('/MListRoomComponents')
            }).catch(error => {
                console.log(error)
            })

        } else {
            RoomService.createRoom(room).then((response) => {
                console.log(response.data)
                history.push('/MListRoomComponents');

            }).catch(error => {
                console.log(error)
            })
        }

    }
    useEffect(() => {
        RoomService.getRoomById(id).then((response) => {
            setRoomNo(response.data.roomNo)
            setRoomType(response.data.roomType)
            setIsOccupied(response.data.isOccupied)
            setRoomCost(response.data.roomCost)
            setCheckIn(response.data.checkIn)
            setCheckOut(response.data.checkOut)
        }).catch(error => {
            console.log(error)
        })
    }, [id]) //12
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("success");
        }
    }, [formErrors, isSubmit]); //12
    const validate = (room) => {
        const errors = {};
        const name_regex = /^[a-zA-Z ]{2,30}$/i;
        if (!room.roomNo) {
            errors.roomNo = "RoomNo is required!";
        }
        else if (!name_regex.test(room.roomNo.length > 0)) {
            errors.roomNo = "Not valid roomNo!";
        }
        if (!room.roomType) {
            errors.roomType = "RoomType is required!";
        }
        if (!room.isOccupied) {
            errors.isOccupied = "IsOccupied is required!";
        } else if (!name_regex.test(room.isOccupied.length > 0)) {
            errors.isOccupied = "This is not a valid isOccupied format!";
        }

        if (!room.roomCost) {
            errors.roomCost = "RoomCost is required!";
        }
        else if (!name_regex.test(room.roomCost.length > 0)) {
            errors.roomCost = "This is not a valid RoomCost format!";
        }

        return errors;
    };
    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Room</h2>
        } else {
            return <h2 className="text-center">Add Room</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Room No :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter No"
                                        name=" Room No"
                                        className="form-control"
                                        value={roomNo}
                                        onChange={(e) => setRoomNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <p>{formErrors.roomNo}</p>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Room Type :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Room Type"
                                        name="Room Type"
                                        className="form-control"
                                        value={roomType}
                                        onChange={(e) => setRoomType(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.roomType}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> IsOccupied :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter IsOccupied"
                                        name="IsOccupied"
                                        className="form-control"
                                        value={isOccupied}
                                        onChange={(e) => setIsOccupied(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.isOccupied}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> RoomCost :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter RoomCost"
                                        name="RoomCost"
                                        className="form-control"
                                        value={roomCost}
                                        onChange={(e) => setRoomCost(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.roomCost}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> checkIn:</label>
                                    <input
                                        type="Date"
                                        placeholder="checkIn"
                                        name="CheckIn"
                                        className="form-control"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.checkIn}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> checkOut:</label>
                                    <input
                                        type="Date"
                                        placeholder="checkOut"
                                        name="CheckOut"
                                        className="form-control"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.checkOut}</p>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateRoom(e)} >Submit </button>
                                <Link to="/MListRoomComponents" className="btn btn-danger"> Cancel </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MAddRoomComponents;


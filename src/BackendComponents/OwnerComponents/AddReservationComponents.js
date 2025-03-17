import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import ReservationService from "../../BackendService/OwnerService/ReservationService"

export const AddReservationComponents = () => {

    const [roomNo, setRoomNo] = useState("")
    const [children, setChildren] = useState("")
    const [adults, setAdults] = useState("")
    const [checkindate, setCheckindate] = useState("")
    const [checkoutdate, setCheckoutdate] = useState("")
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const initialValues = { roomNo: "", children: "", adults: "", checkindate: "", checkoutdate: "" };
    const [formValues] = useState(initialValues);
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateReservation = (e) => {
        e.preventDefault();

        const reservation = { roomNo, children, adults, checkindate, checkoutdate }
        setFormErrors(validate(reservation));
        setIsSubmit(true);

        if (id) {
            ReservationService.updateReservationbyId(id, reservation).then((response) => {
                history.push('/ListReservationComponent')
            }).catch(error => {
                console.log(error)
            })

        } else {
            ReservationService.createRervation(reservation).then((response) => {

                console.log(response.data)

                history.push('/ListReservationComponent');

            }).catch(error => {
                console.log(error)
            })
        }

    }
    useEffect(() => {

        ReservationService.getReservationById(id).then((response) => {
            setRoomNo(response.data.roomNo)
            setChildren(response.data.children)
            setAdults(response.data.adults)
            setCheckindate(response.data.checkindate)
            setCheckoutdate(response.data.checkoutdate)
        }).catch(error => {
            console.log(error)
        })
    }, [id]) //2
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
    }, [formErrors, isSubmit]); //13
    const validate = (reservation) => {
        const errors = {};
        const name_regex = /^[a-zA-Z ]{2,30}$/i;
        if (!reservation.roomNo) {
            errors.roomNo = "RoomNo is required!";
        }
        else if (!name_regex.test(reservation.roomNo.length > 0)) {
            errors.roomNo = "Not valid RoomNo!";
        }
        if (!reservation.children) {
            errors.children = "Children is required!";

        }
        if (!reservation.adults) {
            errors.adults = "Adults is required!";
        } else if (!name_regex.test(reservation.adults.length > 0)) {
            errors.adults = "This is not a valid  format!";
        }

        if (!reservation.checkindate) {
            errors.checkindate = "checkindate is required!";
        }

        if (!reservation.checkoutdate) {
            errors.checkoutdate = "checkoutdate is required!";
        }


        return errors;
    };
    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Reservation</h2>
        } else {
            return <h2 className="text-center">Add Reservation</h2>
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
                                    <label className="form-label"> RoomNo :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter number"
                                        name="RoomNo"
                                        className="form-control"
                                        value={roomNo}
                                        onChange={(e) => setRoomNo(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.roomNo}</p>


                                <div className="form-group mb-2">
                                    <label className="form-label"> Children :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Children"
                                        name="Children"
                                        className="form-control"
                                        value={children}
                                        onChange={(e) => setChildren(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.children}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Adults :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Adults"
                                        name="Adults"
                                        className="form-control"
                                        value={adults}
                                        onChange={(e) => setAdults(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.adults}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Checkindate :</label>
                                    <input
                                        type="date"
                                        placeholder="Enter salary"
                                        name="Checkindate"
                                        className="form-control"
                                        value={checkindate}
                                        onChange={(e) => setCheckindate(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.checkindate}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Checkoutdate:</label>
                                    <input
                                        type="date"
                                        placeholder="Checkoutdate"
                                        name="Checkoutdate"
                                        className="form-control"
                                        value={checkoutdate}
                                        onChange={(e) => setCheckoutdate(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.checkoutdate}</p>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateReservation(e)} >Submit </button>
                                <Link to="/ListReservationComponent" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddReservationComponents

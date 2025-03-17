import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import SetRateService from "../../BackendService/OwnerService/SetRateService"

export const AddSetRateComponents = () => {

    const [guest, setGuest] = useState("")
    const [days, setDays] = useState("")
    const [nightPrice, setNightPrice] = useState("")
    const [extension, setExtension] = useState("")
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const initialValues = { guest: "", days: "", nightPrice: "", extension: "" };
    const [formValues] = useState(initialValues);
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdatesetrate = (e) => {
        e.preventDefault();

        const setrate = { guest, days, nightPrice, extension }
        setFormErrors(validate(setrate));
        setIsSubmit(true);


        if (id) {
            SetRateService.updateSetRates(id, setrate).then((response) => {
                history.push('/ListSetRatesComponent')
            }).catch(error => {
                console.log(error)
            })

        } else {
            SetRateService.createSetRates(setrate).then((response) => {

                console.log(response.data)

                history.push('/ListSetRatesComponent');

            }).catch(error => {
                console.log(error)
            })
        }

    }
    useEffect(() => {

        SetRateService.getsetrateById(id).then((response) => {
            setGuest(response.data.guest)
            setDays(response.data.days)
            setNightPrice(response.data.nightPrice)
            setExtension(response.data.extension)

        }).catch(error => {
            console.log(error)
        })
    }, [id])  //4
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
    }, [formErrors , isSubmit]); //8
    const validate = (setrate) => {
        const errors = {};
        const name_regex = /^[a-zA-Z ]{2,30}$/i;
        if (!setrate.guest) {
            errors.guest = "Guest is required!";
        }

        if (!setrate.days) {
            errors.days = "Days is required!";
        }
        if (!setrate.nightPrice) {
            errors.nightPrice = "NightPrice is required!";
        } else if (!name_regex.test(setrate.nightPrice.length > 0)) {
            errors.nightPrice = "This is not a valid  format!";
        }

        if (!setrate.extension) {
            errors.extension = "Extension is required!";
        }
        // else if (!name_regex.test(setrate.extension.length > 0)) {
        //     errors.extension = "This is not a valid  format!";
        // }

        return errors;
    };

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update SetRate</h2>
        } else {
            return <h2 className="text-center">Add SetRates</h2>
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
                                    <label className="form-label"> Guest :</label>
                                    <input
                                        type="number"
                                        placeholder="guests No"
                                        name="Guest"
                                        className="form-control"
                                        value={guest}

                                        onChange={(e) => setGuest(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <p>{formErrors.guest}</p>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Days :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Days"
                                        name="Days"
                                        className="form-control"
                                        value={days}

                                        onChange={(e) => setDays(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.days}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> One Night price :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter price"
                                        name="One Night price"
                                        className="form-control"
                                        value={nightPrice}

                                        onChange={(e) => setNightPrice(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.nightPrice}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Extension :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Extension"
                                        name="Extension"
                                        className="form-control"
                                        value={extension}

                                        onChange={(e) => setExtension(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <p>{formErrors.extension}</p>


                                <button className="btn btn-success" onClick={(e) => saveOrUpdatesetrate(e)} >Submit </button>
                                <Link to="/ListSetRatesComponent" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddSetRateComponents

import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useState } from 'react'
import PaymentService from '../../BackendService/ReceptionistService/PaymentService'


export const RAddPaymentComponents = () => {

    const [roomNo, setRoomNo] = useState("")
    const [creditcard, setCreditcard] = useState("")
    const [total, setTotal] = useState("")
    const [paytime, setPaytime] = useState("")
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdatePayment = (e) => {
        e.preventDefault();

        const payment = { roomNo, creditcard, total, paytime }
        console.log(payment);


        PaymentService.createPayment(payment).then((response) => {

            console.log(response.data)

            history.push('/RListPaymentComponents');

        }).catch(error => {
            console.log(error)
        })
    }



    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Payment</h2>
        } else {
            return <h2 className="text-center">Add Payment</h2>
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
                            <form>
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



                                <div className="form-group mb-2">
                                    <label className="form-label">creditcard No :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter creditcard No"
                                        name="creditcard No"
                                        className="form-control"
                                        value={creditcard}
                                        onChange={(e) => setCreditcard(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Total Cost :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Total Cost"
                                        name="Total Cost"
                                        className="form-control"
                                        value={total}
                                        onChange={(e) => setTotal(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> paytime :</label>
                                    <input

                                        placeholder="Enter paytime"
                                        type="datetime-local"
                                        name="event_dt"
                                        className="form-control"
                                        value={paytime}
                                        onChange={(e) => setPaytime(e.target.value)}
                                    >
                                    </input>

                                </div>



                                <button className="btn btn-success" onClick={(e) => saveOrUpdatePayment(e)} >Submit </button>
                                <Link to="/RListPaymentComponents" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RAddPaymentComponents

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PaymentService from '../../BackendService/ReceptionistService/PaymentService'
import ReceptionDashboard from '../../Dashboard/ReceptionistDashboard'

const RListPaymentComponents = () => {

    const [payment, setPayment] = useState([])

    useEffect(() => {

        getAllPayment();
    }, [])

    const getAllPayment = () => {
        PaymentService.getAllPayment().then((response) => {
            setPayment(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }



    return (
        <div>
            <ReceptionDashboard />
            <div className="container">
                <h2 className="text-center"> List payment </h2>
                <Link to="/Radd-payment" className="btn btn-primary mb-2" > Add Payment </Link>
                <Link to="/pay" className="btn btn-primary mb-2" > Online Payment </Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>  Id </th>
                        <th> RoomNo </th>
                        <th> creditcard </th>
                        <th> total</th>
                        <th> paytime</th>



                    </thead>
                    <tbody>
                        {
                            payment.map(
                                payment =>
                                    <tr key={payment.id}>
                                        <td> {payment.id} </td>
                                        <td> {payment.roomNo} </td>
                                        <td>{payment.creditcard}</td>
                                        <td>{payment.total}</td>
                                        <td>{payment.paytime}</td>



                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default RListPaymentComponents
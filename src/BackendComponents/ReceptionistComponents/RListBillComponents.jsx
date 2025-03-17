import React, { Component } from 'react'
import BillService from '../../BackendService/ReceptionistService/BillService';
import ReceptionDashboard from '../../Dashboard/ReceptionistDashboard';



class RListBillComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bills: []
        }
        this.createBill = this.createBill.bind(this);

    }


    viewBill(billNo) {
        this.props.history.push(`/view-bill/${billNo}`);
    }


    componentDidMount() {
        BillService.getAllBill().then((res) => {
            this.setState({ bills: res.data });
        });
    }

    createBill() {
        this.props.history.push('/add-bill/_add');
    }


    render() {
        return (


            <div>
                <ReceptionDashboard />
                <div className="container">
                    <h2 className="text-center">bill List</h2>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.createBill}> Add Bill</button>
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>

                                <th> BILL_Id</th>
                                <th> roomNo</th>
                                <th> price</th>
                                <th> taxes</th>
                                <th> date</th>
                                <th>service</th>
                                <th>total</th>
                                <th> Action</th>


                            </thead>
                            <tbody>
                                {
                                    this.state.bills.map(
                                        bill =>
                                            <tr key={bill.billNo}>
                                                <td> {bill.billNo} </td>
                                                <td> {bill.roomNo} </td>
                                                <td> {bill.price}</td>
                                                <td> {bill.taxes}</td>
                                                <td> {bill.date}</td>
                                                <td> {bill.service}</td>
                                                <td> {bill.total}</td>

                                                <td>

                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewBill(bill.billNo)} className="btn btn-info">View </button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        )
    }
}

export default RListBillComponents

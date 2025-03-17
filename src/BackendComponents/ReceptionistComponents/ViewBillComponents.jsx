import React, { Component } from 'react'
import BillService from '../../BackendService/ReceptionistService/BillService';

import '../../BackendComponents/ServiceComponents.css';
import ReactToPrint from 'react-to-print';
import ReceptionDashboard from '../../Dashboard/ReceptionistDashboard';



class ViewBillComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            billNo: this.props.match.params.billNo,
            bill: {}
        }
    }

    componentDidMount() {
        BillService.getBillById(this.state.billNo).then(res => {
            this.setState({ bill: res.data });
        })
    }

    render() {
        return (
            <div>
                <ReceptionDashboard />
                <br></br>
                <div ref={el => (this.componentRef = el)}>
                    <div className="card col-md-6 offset-md-3" >
                        <h3 className="text-center"> View Bill Details</h3>
                        <div className="card-body">
                            <div className="row">
                                <label className='amma'> BillID    :           </label>
                                <div> {this.state.bill.billNo}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> RoomNo    :           </label>
                                <div> {this.state.bill.roomNo}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> price   :             </label>
                                <div> {this.state.bill.price}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Taxes  :      </label>
                                <div> {this.state.bill.taxes}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Date  :     </label>
                                <div> {this.state.bill.date}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Service  :         </label>
                                <div> {this.state.bill.service}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Total  :         </label>
                                <div> {this.state.bill.total}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <ReactToPrint
                        trigger={() => {
                            return <button style={{ marginLeft: "730px", }} className="btn btn-info">Print </button>
                        }}
                        content={() => this.componentRef}
                        documentTitle='new document'
                        pageStyle="print"
                    />
                </div>
            </div>
        )
    }
}

export default ViewBillComponent
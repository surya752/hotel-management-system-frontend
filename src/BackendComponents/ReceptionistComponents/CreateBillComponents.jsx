import React, { Component } from 'react'
import BillService from '../../BackendService/ReceptionistService/BillService';
import ReceptionDashboard from '../../Dashboard/ReceptionistDashboard';

class CreateBillComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            billNo: this.props.match.params.billNo,
            roomNo: '',
            price: '',
            taxes: '',
            date: '',
            service: '',
            total: ''
        }
        this.changeRoomNoHandler = this.changeRoomNoHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeTaxesHandler = this.changeTaxesHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeServiceHandler = this.changeServiceHandler.bind(this);
        this.changeTotalHandler = this.changeTotalHandler.bind(this);
        this.saveOrUpdatebill = this.saveOrUpdatebill.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.billNo === '_add') {
            return
        } else {
            BillService.getBillById(this.state.billNo).then((res) => {
                let bill = res.data;
                this.setState({
                    roomNo: bill.roomNo,
                    price: bill.price,
                    taxes: bill.taxes,
                    date: bill.date,
                    service: bill.service,
                    total: bill.total

                });
            });
        }
    }
    saveOrUpdatebill = (e) => {
        e.preventDefault();
        let bill = { roomNo: this.state.roomNo, price: this.state.price, taxes: this.state.taxes, date: this.state.date, service: this.state.service, total: this.state.total };
        console.log('bill => ' + JSON.stringify(bill));

        // step 5

        BillService.createBill(bill).then(res => {
            this.props.history.push('/RListBillComponents');
        });

    }

    changeRoomNoHandler = (event) => {
        this.setState({ roomNo: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    changeTaxesHandler = (event) => {
        this.setState({ taxes: event.target.value });
    }
    changeDateHandler = (event) => {
        this.setState({ date: event.target.value });
    }
    changeServiceHandler = (event) => {
        this.setState({ service: event.target.value });
    }
    changeTotalHandler = (event) => {
        this.setState({ total: event.target.value });
    }

    cancel() {
        this.props.history.push('/RListBillComponents');
    }

    getTitle() {
        if (this.state.billNo === '_add') {
            return <h3 className="text-center">Add Bill</h3>
        } else {
            return <h3 className="text-center">Update Bill</h3>
        }
    }
    render() {
        return (
            <div>
                <ReceptionDashboard />
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>roomNo: </label>
                                        <input placeholder="roomNo" name="roomNo" className="form-control"
                                            value={this.state.roomNo} onChange={this.changeRoomNoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> price: </label>
                                        <input placeholder="price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> taxes: </label>
                                        <input placeholder="taxes" name="taxes" className="form-control"
                                            value={this.state.taxes} onChange={this.changeTaxesHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> date: </label>
                                        <input placeholder="date" name="date" className="form-control" type='Date'
                                            value={this.state.date} onChange={this.changeDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> service: </label>
                                        <input placeholder="service" name="service" className="form-control"
                                            value={this.state.service} onChange={this.changeServiceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> total: </label>
                                        <input placeholder="total" name="total" className="form-control"
                                            value={this.state.total} onChange={this.changeTotalHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdatebill}>Submit</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateBillComponent

import React, { Component } from 'react'
import EmployeeService from '../../BackendService/ManagerService/EmployeeService';
import ManagerDashboard from '../../Dashboard/ManagerDashboard';
import "../../BackendComponents/ServiceComponents.css";
import ReactToPrint from 'react-to-print';


class MViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    render() {
        return (
            <div>
                <ManagerDashboard />
                <br></br>
                <div ref={el => (this.componentRef = el)}>
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center"> View Employee Details</h3>
                        <div className="card-body">
                            <div className="row">
                                <label className='amma'> Emp_Name :  </label>
                                <div> {this.state.employee.emp_Name}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Email :  </label>
                                <div> {this.state.employee.email}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Employee Salary : </label>
                                <div> {this.state.employee.salary}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Employee Address : </label>
                                <div> {this.state.employee.emp_Address}</div>
                            </div>
                            <div className="row">
                                <label className='amma'> Occupation : </label>
                                <div> {this.state.employee.occupation}</div>
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

export default MViewEmployeeComponent

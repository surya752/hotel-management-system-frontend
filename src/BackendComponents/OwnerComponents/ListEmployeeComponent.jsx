import React, { Component } from 'react'
import EmployeeService from '../../BackendService/OwnerService/EmployeeService';
import OwnerDashboard from '../../Dashboard/OwnerDashboard';


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.createEmployee = this.createEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(() => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }
      

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    createEmployee() {
        this.props.history.push('/add-employee/_add');
    }


    render() {
        return (


            <div>
               <OwnerDashboard /> 


                <div className="container" >
                    <h2 className="text-center">Employees List</h2>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.createEmployee}> Add Employee</button>
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>

                                <th> Emp_Id</th>
                                <th> Emp_name</th>
                                <th> Email</th>
                                <th> Salary</th>
                                <th> Emp_Address</th>
                                <th> Occupation</th>
                                <th> Action</th>


                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                            <tr key={employee.id}>
                                                <td> {employee.id} </td>
                                                <td> {employee.empName} </td>
                                                <td> {employee.email}</td>
                                                <td> {employee.salary}</td>
                                                <td> {employee.empAddress}</td>
                                                <td> {employee.occupation}</td>

                                                <td>
                                                    <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
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

export default ListEmployeeComponent

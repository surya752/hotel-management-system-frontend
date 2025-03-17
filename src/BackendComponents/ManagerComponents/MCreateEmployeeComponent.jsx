import React from 'react'
import EmployeeService from '../../BackendService/ManagerService/EmployeeService';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';


const MCreateEmployeeComponent = () => {
    const [empName, setEmployeeName] = useState('')
    const [email, setEmployeeEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [empAddress, setEmployeeAddress] = useState('')
    const [occupation, setOccupation] = useState('')
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const initialValues = { empName: "", email: "", salary: "", empAddress: "", occupation: "" };
    const [formValues] = useState(initialValues);
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateemployee = (e) => {
        e.preventDefault();

        const employee = { empName, email, salary, empAddress, occupation }
        setFormErrors(validate(employee));
        setIsSubmit(true);
        if (id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                history.push('/MListEmployeeComponent');
            });
        } else {
            EmployeeService.updateEmployee(employee, id).then(res => {
                history.push('/MListEmployeeComponent');
            });
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployeeName(response.data.empName)
            setEmployeeEmail(response.data.email)
            setSalary(response.data.salary)
            setEmployeeAddress(response.data.empAddress)
            setOccupation(response.data.occupation)
        }).catch(error => {
            console.log(error)
        })
    }, [id]) //7
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
    }, [formErrors,isSubmit]); //15

    const validate = (employee) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const name_regex = /^[a-zA-Z ]{2,30}$/i;
        if (!employee.empName) {
            errors.empName = "name is required!";
        }
        else if (!name_regex.test(employee.empName)) {
            errors.empName = "Not valid name!";
        }
        if (!employee.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(employee.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!employee.salary) {
            errors.salary = "Salary is required!";
        } else if (!name_regex.test(employee.salary.length > 0)) {
            errors.salary = "This is not a valid Salary format!";
        }
        if (!employee.empAddress) {
            errors.empAddress = "Employee Address is required!";
        }

        if (!employee.occupation) {
            errors.occupation = "Occupation is required!";
        }
        else if (!name_regex.test(employee.occupation)) {
            errors.occupation = "This is not a valid Occupation format!";
        }
        return errors;
    };


    const title = () => {
        if (id === '_add') {
            return <h2 className='text-center'>Add Employee</h2>
        }
        else {

            return <h2 className='text-center'>Update Employee</h2>
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
                                    <label className="form-label">Emp_Name</label>
                                    <input
                                        type="text"
                                        placeholder="Employee Name"
                                        name="empName"
                                        className="form-control"
                                        value={empName} onChange={(e) => setEmployeeName(e.target.value)} />
                                </div>
                                <p>{formErrors.empName}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        name="email"
                                        className="form-control"
                                        value={email} onChange={(e) => setEmployeeEmail(e.target.value)} />
                                </div>
                                <p>{formErrors.email}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label">Salary</label>
                                    <input
                                        type="text"
                                        placeholder="Salary"
                                        name="salary"
                                        className="form-control"
                                        value={salary} onChange={(e) => setSalary(e.target.value)} />
                                </div>
                                <p>{formErrors.salary}</p>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Emp_Address</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Employee Address"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={empAddress}
                                        onChange={(e) => setEmployeeAddress(e.target.value)}></textarea>
                                </div>
                                <p>{formErrors.empAddress}</p>
                                <div className="form-group mb-2">
                                    <label> Occupation: </label>
                                    <input placeholder="Occupation" name="text" className="form-control"
                                        value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                                    <p>{formErrors.occupation}</p>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" onClick={(e) => saveOrUpdateemployee(e)}>Submit</button>
                                    <Link to="/MListEmployeeComponent" className="btn btn-danger">cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MCreateEmployeeComponent;
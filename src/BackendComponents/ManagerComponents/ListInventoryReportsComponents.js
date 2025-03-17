import InventoryReportsService from '../../BackendService/ManagerService/InventoryReportsService'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ManagerDashboard from '../../Dashboard/ManagerDashboard'

const MListInventoryReportsComponent = () => {

    const [inventoryreports, setInventoryreports] = useState([])
    useEffect(() => {
        getAllInvenroryReports();
    }, [])

    const getAllInvenroryReports = () => {
        InventoryReportsService.getAllInvenroryReports().then((response) => {
            setInventoryreports(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteInventoryReports = (inventoryId) => {
        console.log(inventoryId);
        InventoryReportsService.deleteInventoryReports(inventoryId).then((response) => {
            getAllInvenroryReports();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <ManagerDashboard />
            <div className="container">
                <h2 className="text-center"> List InventoryReports </h2>
                <Link to="/Madd-inventory" className="btn btn-primary mb-2" > Add InventoryReports </Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th> InventoryReports Id </th>
                        <th> MaintainanceCost </th>
                        <th> Employeesalary </th>
                        <th> Totalincome</th>
                        <th> totalProfit</th>
                        <th> Actions </th>
                    </thead>
                    <tbody>
                        {
                            inventoryreports.map(
                                inventoryreports =>
                                    <tr key={inventoryreports.id}>
                                        <td> {inventoryreports.id} </td>
                                        <td> {inventoryreports.maintainanceCost} </td>
                                        <td>{inventoryreports.employeesalary}</td>
                                        <td>{inventoryreports.totalincome}</td>
                                        <td>{inventoryreports.totalProfit}</td>
                                        <td>
                                            <Link className="btn btn-info" to={`/Mupdateinventory/${inventoryreports.id}`} >Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteInventoryReports(inventoryreports.id)}
                                                style={{ marginLeft: "10px" }}> Delete</button>

                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default MListInventoryReportsComponent;
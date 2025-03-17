import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SetRateService from "../../BackendService/OwnerService/SetRateService"
import OwnerDashboard from '../../Dashboard/OwnerDashboard'

const ListSetRatesComponent = () => {

    const [setrate, setSetrates] = useState([])

    useEffect(() => {

        getAllSetRates();
    }, [])
    const getAllSetRates = () => {
        SetRateService.getAllSetRates().then((response) => {
            setSetrates(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteSetRates = (setrateId) => {
        console.log(setrateId);
        SetRateService.deleteEmployee(setrateId).then((response) => {

            getAllSetRates();

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div>
            <OwnerDashboard />
            <div className="container">
                <h2 className="text-center"> List SetRates </h2>
                <Link to="/add-setrate" className="btn btn-primary mb-2" > Add SetRates </Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>  Id </th>
                        <th> Guest </th>
                        <th> Days</th>
                        <th> Night Price</th>
                        <th> Extension</th>
                        <th> Actions </th>
                    </thead>
                    <tbody>
                        {
                            setrate.map(
                                setrate =>
                                    <tr key={setrate.id}>
                                        <td> {setrate.id} </td>
                                        <td> {setrate.guest} </td>
                                        <td>{setrate.days}</td>
                                        <td>{setrate.nightPrice}</td>
                                        <td>{setrate.extension}</td>

                                        <td>
                                            <Link className="btn btn-info" to={`/updatesetrate/${setrate.id}`} >Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteSetRates(setrate.id)}
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

export default ListSetRatesComponent

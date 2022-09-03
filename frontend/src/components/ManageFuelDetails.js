import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

function FuelDetailsManagement() {

    const [fueldetails, setfueldetails] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/fueldetail/`)
            .then((fueldetails) => {
                setfueldetails(fueldetails.data);
                console.log(fueldetails.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);


    function deleteMovie(id) {
        axios.delete(`http://localhost:8000/fueldetail/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
        window.location.reload();
    }

    return (
        <div>
            <h1 className='text-danger'>Fuel Details Management</h1>
                <table className='table table-bordered table-striped'>
                    <tr>
                        <th scope="col">Fuel Type</th>
                        <th scope="col">Fuel Quality</th>
                        <th scope="col">Cypetco Item No</th>
                        <th scope="col">Price</th>
                        <th scope="col">Price Update Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Options</th>
                    </tr>

                    <tbody>
                        {
                            fueldetails.map((val, key) => {
                                return (
                                    <tr>
                                        <td style={{width:"100px"}}>{val.fueltype}</td>
                                        <td style={{width:"100px"}}>{val.fuelquality}</td>
                                        <td style={{width:"100px"}}>{val.cypetcoitemno}</td>
                                        <td style={{width:"100px"}}>{val.price}</td>
                                        <td style={{width:"100px"}}>{val.priceupdateddate}</td>
                                        <td style={{width:"100px"}}>{val.description}</td>
                                        <td style={{width:"100px"}}><a href={`/update/`+val._id} className='btn-sm btn-primary'>Update</a>  <button className='btn-sm btn-danger' onClick={() => deleteMovie(val._id)}>Delete</button>
                                        
                                        <Popup
                                                trigger={<button className="btn btn-outline-secondary"> View Detail </button>}
                                                modal
                                                nested
                                            >
                                                {close => (
                                                    <div className="container-fluid" style={{ padding: 5 }}>



                                                        <div className="h-100 p-5 bg-light border rounded-3">
                                                            <h1 className="card-title">Fuel Type: {val.fueltype}</h1>
                                                            <p className="card-text">fuel quality: {val.fuelquality}</p>
                                                            <p className="card-text">cypetco item no: {val.cypetcoitemno}</p>
                                                            <span className="card-text">price: {val.price}</span> <br />
                                                            <span className="card-text">price updated date: {val.priceupdateddate}</span><br />
                                                            <span className="card-text">description: {val.description}</span>

                                                            <div className>
                                                                <br></br>
                                                                <button
                                                                    className="btn btn-outline-danger"
                                                                    onClick={() => {
                                                                        console.log('modal closed ');
                                                                        close();
                                                                    }}
                                                                >
                                                                    Close
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Popup>
                                        
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div >
    );
}

export default FuelDetailsManagement;
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
        <div className='container-table100'>
             <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Admin: Manage Fuel Details</h1>
                        <p class="lead fw-normal text-white-50 mb-0">Fuel Details</p>
                    </div>
                </div>
            </header>
            <br></br>
            <br></br>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="http://localhost:3000/adddetails" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> + Add New Fuel Details</a>
            
  
</div>
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-md-12">
                <div class="table-wrap">
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Fuel Type</th>
                        <th scope="col">Fuel Quality</th>
                        <th scope="col">Cypetco Item No</th>
                        <th scope="col">Price</th>
                        <th scope="col">Price Update Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
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
                                        <td style={{width:"100px"}}><a href={`/updatefueldetails/`+val._id} className='btn btn-warning'>Update</a> 
                                        <Popup
                                                trigger={<button className="btn btn-danger"> Delete </button>}
                                                modal
                                                nested
                                            >
                                                {close => (
                                                    <div className="container-fluid" style={{ padding: 5 }}>



                                                        <div className="h-100 p-5 bg-light border rounded-3">
                                                            <h1 className="card-title">Delete This Field ?</h1>
                                                            <div className>
                                                                <br></br>
                                                                <button
                                                                    className="btn btn-success"
                                                                    onClick={() => {
                                                                        console.log('modal closed ');
                                                                        close();
                                                                    }}
                                                                >
                                                                    Cancle
                                                                </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                <button className='btn btn-danger' onClick={() => deleteMovie(val._id)}>Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Popup>
                                        <Popup
                                                trigger={<button className="btn btn-info"> View Detail </button>}
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
                </div >
                </div >
        </div >
    );
}

export default FuelDetailsManagement;
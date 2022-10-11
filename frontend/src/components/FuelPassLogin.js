import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fuelpasslogin from '../images/fuelpasslogin.jpg';
import Footer from './Footer';
import Header from './Header';

export default function FuelPassLogin() {

    const [data, setData] = useState([]);

    const [nic, setNIC] = useState("");
    const [mobile_number, setMobileNumber] = useState("");

    const obj = {
        mobile_number, nic
    }

    const findProfile = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/identifier/findprofile', obj)
            .then((res) => {
                setData(res.data);
                console.log(res.data._id);

                if (res.data._id) {
                    alert("Login Successful");
                    window.location.href = `/user/fuelpass/${res.data._id}`;
                }

            }).
            catch((err) => {
                console.log(err.message);
            })

    }

    return (
        <div>
            <Header />
            <div className="container" style={{ 'marginTop': '150px' }}>
                <center>

                    <table className="table">
                        <tr className="">
                            <td className="col-6">
                                <img src={fuelpasslogin} />
                            </td>
                            <td className="col-6">
                                <div className="card bg-dark p-4 text-light text-center" style={{ fontSize: '30px' }}>
                                    FUEL PASS LOGIN
                                </div>
                                <div className="card mt-5" style={{backgroundColor:'#9fa19e'}}>

                                    <form className="h-100" onSubmit={findProfile}>
                                        <label className="form-label">MOBILE NO</label>
                                        <input className="form-control" type="text" name="mobile_number" onChange={
                                            (e) => {
                                                setMobileNumber(e.target.value);
                                            }
                                        }
                                        /><br />
                                        <label className="form-label">NIC</label>
                                        <input className="form-control" type="text" name="nic" onChange={
                                            (e) => {
                                                setNIC(e.target.value);
                                            }
                                        } /><br />

                                        <input className="form-control btn btn-danger" type="submit" value="LOGIN" /><br />
                                    </form><br /><br />
                                    <a href="" style={{ textDecoration: 'none' }}>IF YOU HAVE NOT A FUEL PASS, CLICK  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="btn btn-warning col-4" type="button" value="REGISTER" /></a>
                                </div>

                            </td>
                            <td className="col-2"></td>
                        </tr>
                    </table>

                </center>
            </div >
            <Footer />
        </div>
    );

}
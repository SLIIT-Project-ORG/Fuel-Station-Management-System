import axios from "axios";
import React, { useState } from "react";


export default function UserLogin() {

    const [Phone_Number, setPhoneNumber] = useState("");
    const [NIC, setNIC] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newuseremployee = {
            NIC, Phone_Number
        }

        axios.post("http://localhost:8000/admin/employeeprofile/search", newuseremployee).then((res) => {

            if (res.data._id != null) {
                alert("Login Successful");
                console.log(res.data);
                window.location.href = `/employeeprofile/${res.data._id}`
            }

        }).catch((err) => {
            alert("Login Failed");
        })
    }




    return (
        <div>
            <div className="row mt-5"></div>
            <div className="row">
                <h1 className="text-danger mt-5 text-center">Employee Profile</h1>
                <div className="col-3"></div>
                <div class="col-lg-4 d-none d-lg-flex mt-5">
                    <img src="https://media.istockphoto.com/photos/bearded-worker-of-gas-station-picture-id1208245562?k=6&m=1208245562&s=612x612&w=0&h=5Ae5kdoXekO3CmA9yjxPdhSPpBTxX1g53eBJDUvsNZE=" alt="Trendy Pants and Shoes"
                        class="w-100  " />
                </div>

                <div className="card col-3 mt-5">



                    <form onSubmit={sendData} className="mt-5">



                        <div>
                            <input type="Phonenumber" id="Phonenumber" class="form-control" required onChange={
                                (e) => {
                                    setPhoneNumber(e.target.value);
                                }
                            } />
                            <label class="form-label" for="form2Example1" >Phonenumber</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="nic" id="nic" class="form-control" required onChange={
                                (e) => {
                                    setNIC(e.target.value);
                                }
                            } />
                            <label class="form-label" for="form2Example2">NIC</label>
                        </div>



                        <button type="submit" class="btn btn-primary btn-block mb-4  form-control">Submit</button>

                        <button type="button " class="btn btn-danger btn-block mb-4  form-control" onClick={()=>window.location.href = "/"}>Cancel</button>


                    </form>

                </div>
            </div>


        </div>

    )

}
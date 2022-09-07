import React,{useState} from "react";
import axios from  'axios';
import Admin from "./AdminSideBar";

export default function AddEmployee() {

//add
    const [First_Name, setFirstName] = useState("");
    const [Last_Name, setLastName] = useState("");
    const [Address1,setAddress1]= useState("");
    const [Address2,setAddress2]= useState("");
    const [NIC, setNIC] = useState("");
    const [Phone_Number, setPhoneNumber] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Salary, setSalary] = useState("");
    const [Email, setEmail] = useState("");


     function sendData(e) {
        e.preventDefault();

        const newemployee = {
            First_Name, Last_Name,Address1,Address2, NIC, Phone_Number, Designation, Salary,Email
        }

        axios.post("http://localhost:8000/admin/employeeprofile/insert", newemployee).then(() => {
            alert("Employee Details Successfully added.");

        }).catch((err) => {
            alert(err)
        })
    }

    return (
     
        <div>
            <div class="container-fluid px-1 py-5 mx-auto">
           
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h1 className="text-danger">Add Employee Profile</h1>

                        <div class="card p-5">

                            <form class="form-card" onSubmit={sendData}>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">First name<span class="text-danger"> *</span></label> <input type="text" id="First_Name" name="First_Name" placeholder="Enter your first name" onblur="validate(1)" required onChange={
                            (e) => {
                                setFirstName(e.target.value);
                            }
                        } /> </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last name<span class="text-danger"> *</span></label> <input type="text" id="Last_Name" name="Last_Name" placeholder="Enter your last name" onblur="validate(2)" required onChange={
                            (e) => {
                                setLastName(e.target.value);
                            }
                        }/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Address<span class="text-danger"> *</span></label> <input type="text" id="Address1" name="Address1" placeholder="street1" onblur="validate(3)" required onChange={
                            (e) => {
                                setAddress1(e.target.value);
                            }
                        }/> </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Street2<span class="text-danger"> *</span></label> <input type="text" id="Address2" name="Address2" placeholder="Street2" onblur="validate(4)" required onChange={
                            (e) => {
                                setAddress2(e.target.value);
                            }
                        }/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">NIC<span class="text-danger"> *</span></label> <input type="text" id="NIC" name="NIC" placeholder="Enter your NIC Number" onblur="validate(5)" required onChange={
                            (e) => {
                                setNIC(e.target.value);
                            }
                        }/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone Number<span class="text-danger"> *</span></label> <input type="text" id="Phone_Number" name="Phone_Number" placeholder="+94" onblur="validate(5)" required onChange={
                            (e) => {
                                setPhoneNumber(e.target.value);
                            }
                        } /> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Designation<span class="text-danger"> *</span></label> <input type="text" id="Designation" name="Designation" placeholder="" onblur="validate(5)" required onChange={
                            (e) => {
                                setDesignation(e.target.value);
                            }
                        } /> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Salary<span class="text-danger"> *</span></label> <input type="text" id="Salary" name="Salary" placeholder="RS." onblur="validate(5)" required onChange={
                            (e) => {
                                setSalary(e.target.value);
                            }
                        }/> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="Enter your Email Address" onblur="validate(5)" required onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }/> </div>
                                </div>

                                <div class="row justify-content-end ">


                                    <div class="form-group col-sm-6"> <button type="submit" class="btn btn-danger btn-block mt-5 mb-3 p-2 form-control"onClick={()=>window.location.href = "/admin"}> Cancel </button> </div>
                                    <div class="form-group col-sm-6"> <button type="submit" class="btn btn-primary btn-block ml-5 mt-5 mb-3 p-2 form-control">Add New Employee</button> </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
           


        </div>
    )

}
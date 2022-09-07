import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdatePayment() {


   
    return (
        <div>
            <div>

                <div class="container-fluid px-1 py-5 mx-auto">
                    <div class="row d-flex justify-content-center">
                        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                            <h1 className="text-danger">Update Payment Details</h1>

                            <div class="card p-5">

                                <form class="form-card">
                                    <div class="row justify-content-between text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3">Payment Type<span class="text-danger"> *</span></label>
                                            <select type="text" id="Payment_Type" name="Payment_Type" class="form-select" aria-label="Default select example"  >
                                                <option selected>Select</option>
                                                <option value="credit">Credit</option>
                                                <option value="India">Debit</option></select></div>
                                    </div>

                                    <div class="form-group col-sm-6  mt-3 flex-column d-flex"> <label class="form-control-label px-3">Payment Method<span class="text-danger"> *</span></label>
                                        <select type="text" id="Payment_Method" name="Payment_Method" class="form-select" aria-label="Default select example"  >
                                            <option selected>Select</option>
                                            <option value="credit">Bank Transfer</option>
                                            <option value="India">Normal</option></select></div>

                                    <div class="row justify-content-between mt-3 text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Price<span class="text-danger"> *</span></label> <input type="text" id="Price" name="Price" placeholder="RS." onblur="validate(3)" /> </div>

                                    </div>
                                    <div class="row justify-content-between mt-3  text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Description<span class="text-danger"> *</span></label> <input type="text" id="Description" name="escription" placeholder="" onblur="validate(5)"

                                             /> </div></div>
                                    <div class="row justify-content-between mt-3 text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Date<span class="text-danger"> *</span></label> <input type="Date" id="Date" name="Date" placeholder="" onblur="validate(5)"

                                             /> </div>
                                    </div>
                                    <div class="row justify-content-between mt-3 text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Name of Payment<span class="text-danger"> *</span></label> <input type="text" id="Name_Of_Payment" name="Name_Of_Payment" placeholder="" onblur="validate(5)"


                                          /></div>
                                        <div class="row justify-content-end ">


                                            <div class="form-group col-sm-6"> <button type="submit" class="btn btn-danger btn-block mt-5 mb-3 p-2 form-control" onClick={() => window.location.href = "/admin"}> Cancel </button> </div>
                                            <div class="form-group col-sm-6"> <button type="submit" class="btn btn-primary btn-block ml-5 mt-5 mb-3 p-2 form-control">Update Now</button> </div>


                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )

}
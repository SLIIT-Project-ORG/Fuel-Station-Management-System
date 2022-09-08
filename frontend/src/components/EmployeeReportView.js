import React, { useEffect, useState } from "react";
import ReportGenerator from "./ReportGenerator";
import axios from "axios";

export default  function EmployeeReportView() {

    const [employee, setemployee] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/admin/employeeprofile/").then(res => {
            setemployee(res.data)
        })

    },[]);

        return (

            <div>
                <div className="container mb-4 mt-4 p-3" style={{marginLeft:"850px"}}>
                    <div className="row">
                        {
                            <div className="row">
                                {(
                                    <button className="btn btn-primary col-lg-2 "  onClick={() => ReportGenerator(employee)}>
                                        Download PDF
                                    </button>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>

        )

}

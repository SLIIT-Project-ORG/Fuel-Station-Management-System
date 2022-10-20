const express = require("express");
const cors = require("cors");
require("dotenv/config");

//DB Connection
require("./config/dbconnection");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

//For Route declareration

let employeeprofile = require("./routes/Employee__Profiles_Page.js");
let ppayment = require("./routes/Payments");
let alogin = require("./routes/AdminRoute");

//End

//Set route paths
app.use("/admin/employeeprofile",employeeprofile);
app.use("/admin/payment",ppayment);
app.use("/admin",alogin);
//End

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
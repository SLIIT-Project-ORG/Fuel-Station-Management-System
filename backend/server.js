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

const identifier = require("./routes/fuel_pass/IdentifierRoute.js");
const quantity = require("./routes/fuel_pass/QuantityRoute.js");
const order = require("./routes/fuel_order/OrderRoute.js");
//End

//Set route paths
app.use("/admin/employeeprofile", employeeprofile);
app.use("/admin/payment", ppayment);
app.use("/admin/employeeprofile",employeeprofile);
app.use("/admin/payment",ppayment);

app.use("/admin",alogin);
app.use("/identifier", identifier);
app.use("/quantity", quantity);
app.use("/fuel-order", order);
//End

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
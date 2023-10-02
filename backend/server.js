const express = require("express");
const cors = require("cors");

require("dotenv/config");

//DB Connection
require("./config/dbconnection");

const app = express();
const PORT = process.env.PORT;

//For Route declareration
const fueldetailRouter= require("./routes/FuelDetails");
app.use("/fueldetail",fueldetailRouter);
const fuelInventorydetailRouter= require("./routes/FuelInventory");
app.use("/fuelinventory",fuelInventorydetailRouter);
const fuelstoragedetailRouter= require("./routes/FuelStorage");
app.use("/fuelstorage",fuelstoragedetailRouter);

let employeeprofile = require("./routes/Employee__Profiles_Page.js");
let ppayment = require("./routes/Payments");
let alogin = require("./routes/AdminRoute");

const identifier = require("./routes/fuel_pass/IdentifierRoute.js");
const quantity = require("./routes/fuel_pass/QuantityRoute.js");
const order = require("./routes/fuel_order/OrderRoute.js");
const fueldetailRouter= require("./routes/FuelDetails");
const fuelInventorydetailRouter= require("./routes/FuelInventory");
const fuelstoragedetailRouter= require("./routes/FuelStorage");
let employeeprofile = require("./routes/Employee__Profiles_Page.js");
let ppayment = require("./routes/Payments");
let alogin = require("./routes/AdminRoute");
const identifier = require("./routes/fuel_pass/IdentifierRoute.js");
const quantity = require("./routes/fuel_pass/QuantityRoute.js");
const order = require("./routes/fuel_order/OrderRoute.js");
let VehicleRegistration = require('./routes/VehicleRegistrations');
let SupplierRegistration = require('./routes/SupplierRegistrations');
let FuelRequest = require('./routes/FuelRequests');

//For Route declareration
app.use("/fueldetail",fueldetailRouter);
app.use("/fuelinventory",fuelInventorydetailRouter);
app.use("/fuelstorage",fuelstoragedetailRouter);
app.use("/admin/employeeprofile", employeeprofile);
app.use("/admin/payment", ppayment);
app.use("/admin/employeeprofile",employeeprofile);
app.use("/admin/payment",ppayment);
app.use("/admin",alogin);
app.use("/identifier", identifier);
app.use("/quantity", quantity);
app.use("/fuel-order", order);
app.use("/fueldetail",fueldetailRouter);
app.use("/fuelinventory",fuelInventorydetailRouter);
app.use("/fuelstorage",fuelstoragedetailRouter);
app.use('/VehicleRegistration',VehicleRegistration);
app.use('/SupplierRegistration',SupplierRegistration);
app.use('/FuelRequest',FuelRequest);

//End
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
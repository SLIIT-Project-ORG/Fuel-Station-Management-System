import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './components/Test';
import AddFuelDetails from './components/AdminAddFuelDetails';
import FuelDetailsManagement from './components/ManageFuelDetails';
import FuelDetailsCustomer from './components/FuelDetailsCustomerView';
import UpdateFuelDetails from './components/updateFuelDetails';
import AddFuelInventory from './components/AdminAddInventoty';
import FuelInventoryManagement from './components/ManageInventory';
import AddFuelStorage from './components/AdminAddFuelStorage';
import Header from './components/Header';
import Admin from './components/AdminSideBar';
import UpdateInventory from './components/updateInventory';
import FuelStorageCustomer from './components/StorageDetailsCustomerView';
import UpdateFuelCapacity from './components/UpdateFuelCapacity';
import UpdateFuelStorage from './components/updateFuelStorage';
import FuelStorageManagement from './components/ManageStorage';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          {/* <Route path='/' element={<Header />}></Route> */}
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/adddetails' element={<AddFuelDetails />}></Route>
          <Route path='/fueldetailsmanage' element={<FuelDetailsManagement />}></Route>
          <Route path='/updatefueldetails/:id' element={<UpdateFuelDetails />}></Route>
          <Route path='/fueldetailsCustomer' element={<FuelDetailsCustomer />}></Route>
          <Route path='/addinventory' element={<AddFuelInventory />}></Route>
          <Route path='/manageinventory' element={<FuelInventoryManagement />}></Route>
          <Route path='/updatefuelinventory/:id' element={<UpdateInventory/>}></Route>
          <Route path='/addstorage' element={<AddFuelStorage />}></Route>
          <Route path='/updatefuelstorage/:id' element={<UpdateFuelStorage/>}></Route>
          <Route path='/updatefuelcapacity/:id' element={<UpdateFuelCapacity/>}></Route>
          <Route path='/storagecustomer' element={<FuelStorageCustomer/>}></Route>
          <Route path='/storagemanagement' element={<FuelStorageManagement/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

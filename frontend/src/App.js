import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './components/Test';
import AddFuelDetails from './components/AdminAddFuelDetails';
import FuelDetailsManagement from './components/ManageFuelDetails';
import FuelDetailsCustomer from './components/FuelDetailsCustomerView';
import UpdateFuelDetails from './components/updateFuelDetails';
import Header from './components/Header';
import Admin from './components/AdminSideBar';
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
        </Routes>
      </Router>

    </div>
  );
}

export default App;

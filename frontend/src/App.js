import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/AdminLogin';
import AddEmployee from './components/AddEmployee';
import EmployeeView from './components/EmployeeView';
import UserLogin from './components/UserProfileLogin';
import UserProfileView from './components/UserProfileView';
import UpdateEmployee from './components/UpdateEmployeeDetails';
import Home from './components/HomePage';
import Admin from './components/AdminSideBar';
import EmployeeReportView from './components/EmployeeReportView';
import AddPayment from './components/AddPayment';
import PaymentDetails from './components/PaymentDetails';
import UpdatePayment from './components/UpdatePaymentDetails';
import FuelPassProfile from './components/FuelPassProfile';
import FuelPassLogin from './components/FuelPassLogin';
import FuelPassUserProfile from './components/FuelPassUserProfile';
import AdminFuelPasses from './components/AdminFuelPasses';
import AdminFuelPassUpdate from './components/AdminFuelPassUpdate';
import AdminFuelPasses1 from './components/AdminFuelPasses1';
import AdminFuelPassUpdate1 from './components/AdminFuelPassUpdate1';
import FuelPassProfile1 from './components/FuelPassProfile1';
import { FuelOrderHome } from './components/FuelOrders/FuelOrderHome';
import { AdminFuelOrderView } from './components/FuelOrders/AdminFuelOrderView';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>


          <Route path='/login' element={<Login />}></Route>
          <Route path='/addemployee' element={<AddEmployee />}></Route>
          <Route path='/employeedetails' element={<EmployeeView />}></Route>
          <Route path='/userprofile' element={<UserLogin />}></Route>
          <Route path='/employeeprofile/:id' element={<UserProfileView />}></Route>
          <Route path='/updateemployee/:id' element={<UpdateEmployee />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/employeedetails' element={<EmployeeReportView />}></Route>
          <Route path='/payment' element={<AddPayment />}></Route>
          <Route path='/paymentdetails' element={<PaymentDetails />}></Route>
          <Route path='/updatepayment' element={<UpdatePayment />}></Route>

          {/* Gayashan */}
          {/* <Route path='/admin/allfuelpass' element={<AdminFuelPasses/>}></Route>
          <Route path='/admin/fuelpass/:id' element={<FuelPassProfile/>}></Route>
          <Route path='/user/fuelpass/login' element={<FuelPassLogin/>}></Route>
          <Route path='/user/fuelpass/:id' element={<FuelPassUserProfile/>}></Route>
          <Route path='/admin/update/:id' element={<AdminFuelPasses/>}></Route>
          <Route path='/admin/fuelPass/update/:id' element={<AdminFuelPassUpdate/>}></Route> */}

          {/* Gayashan */}
          <Route path='/admin/allfuelpass' element={<AdminFuelPasses1 />}></Route>
          <Route path='/admin/fuelpass/:id' element={<FuelPassProfile1 />}></Route>
          <Route path='/user/fuelpass/login' element={<FuelPassLogin />}></Route>
          <Route path='/user/fuelpass/:id' element={<FuelPassUserProfile />}></Route>
          <Route path='/admin/update/:id' element={<AdminFuelPasses />}></Route>
          <Route path='/admin/fuelPass/update/:id' element={<AdminFuelPassUpdate1 />}></Route> 

          <Route path='/user/fuelOrderHome' element={<FuelOrderHome/>}/>
          <Route path='/admin/fuelOrderView' element={<AdminFuelOrderView/>}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;

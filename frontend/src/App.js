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
          
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;

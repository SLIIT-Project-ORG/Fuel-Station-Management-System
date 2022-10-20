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

import UpdatePayment from './components/UpdatePaymentDetails';
import Test from './components/Test';
import Test1 from './components/Test1';

import Test4 from './components/Test4';
import Test5 from './components/Test5';
import Test6 from './components/Test6';




function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
 
          
          <Route path='/login' element={<Login />}></Route>
         
          <Route path='/employeedetails' element={<EmployeeView />}></Route>
          <Route path='/userprofile' element={<UserLogin />}></Route>
          <Route path='/employeeprofile/:id' element={<UserProfileView />}></Route>
          <Route path='/updateemployee/:id' element={<UpdateEmployee />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/employeedetails' element={<EmployeeReportView />}></Route>
          
          
          <Route path='/updatepayment/:id' element={<UpdatePayment />}></Route>
          

          <Route path='/test' element={<Test/>}></Route>
          <Route path='/test1' element={<Test1/>}></Route>
          <Route path='/payment' element={<Test4/>}></Route>
          <Route path='/paymentdetails' element={<Test5/>}></Route>
          <Route path='/payment/:id' element={<Test6/>}></Route>
          
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;

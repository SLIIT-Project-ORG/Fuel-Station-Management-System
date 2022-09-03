import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Test from './components/Test';
import AddFuelDetails from './components/AdminAddFuelDetails';
import FuelDetailsManagement from './components/ManageFuelDetails';
function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path='/' element={<AddFuelDetails/>}></Route>
            <Route path='/fueldetailsmanage' element={<FuelDetailsManagement/>}></Route>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;

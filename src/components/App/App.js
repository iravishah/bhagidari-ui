import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetLands from '../Land/Land';
import GetCompanies from '../Company/Company';
import Login from '../Login/Login';
import useToken from './useToken';
import Navbar from '../Navbar';
import GetParteners from '../Partener/Partener';

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact element={<GetLands />} /> */}
          <Route path="/lands" element={<GetLands />} />
          <Route path="/companies" element={<GetCompanies />} />
          <Route path="/parteners" element={<GetParteners />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

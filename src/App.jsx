import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/Notfound';
import Dashboard from './pages/Dashboard';
import Navbars from './components/Navbars'
import FarmerFolder from './pages/FarmerFolder';
import FolderDetail from './pages/FolderDetail';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/folder" element={<FarmerFolder/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/folder/:id" element={<FolderDetail/>} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  )
}

export default App
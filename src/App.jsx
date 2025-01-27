import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Navbars from './components/Navbars'
import FarmerFolder from './pages/FarmerFolder';
import FolderDetail from './pages/FolderDetail';
import Login from './pages/Login';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbars />}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/folder" element={<FarmerFolder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/folder/:id" element={<FolderDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);


export default AppWrapper
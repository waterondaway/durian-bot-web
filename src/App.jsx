<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import Folder from './pages/Folder'
function App() {
=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Navbars from './components/Navbars'
import FarmerFolder from './pages/FarmerFolder';
import FolderDetail from './pages/FolderDetail';
import Login from './pages/Login';

const App = () => {
>>>>>>> Stashed changes
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/folder/1' element={<Folder/>}/>
        <Route path='/folder/2' element={<Folder/>}/>
        <Route path='/folder/3' element={<Folder/>}/>
      </Routes>
    </Router>
  )
}

export default App

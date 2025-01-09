import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import Folder from './pages/Folder'
function App() {
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

import './App.css'
import Dashboard from './Dashboard'
import Class from './Class'
import Finance from './Finance'
import Navbar from './Navbar'
import Registration from './Registration'
import Staff from './Staff'
import Students from './Students'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/class" element={<Class />} />
          <Route path="/students" element={<Students />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

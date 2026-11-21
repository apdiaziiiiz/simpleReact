import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sidebar">
      <h2>Dashboard</h2>
      <Link to="/">Home</Link>
      <Link to="/class">Class</Link>
      <Link to="/students">Students</Link>
      <Link to="/finance">Finance</Link>
      <Link to="/staff">Staff</Link>
      <Link to="/registration">Registration</Link>
    </nav>
  )
}

export default Navbar

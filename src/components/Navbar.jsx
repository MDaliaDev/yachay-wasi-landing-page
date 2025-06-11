import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo_navbar.png" alt="Yachay Wasi Logo" className="navbar-logo" />
        <Link to="/" className="logo">Yachay Wasi</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Inicio</Link>
        {/* <Link to="/asesorias-colegios" className="nav-link">Asesorías a Colegios Nacionales</Link>
        <Link to="/arte-cultura" className="nav-link">Arte y Cultura</Link>
        <Link to="/bienestar" className="nav-link">Bienestar Psicológico</Link> */}
        <Link to="/convocatorias" className="nav-link">Convocatorias</Link>
        <Link to="/donaciones" className="nav-link">Donaciones</Link>
      </div>
    </nav>
  )
}

export default Navbar 
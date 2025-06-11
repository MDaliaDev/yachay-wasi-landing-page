import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SchoolAdvisory from './pages/SchoolAdvisory'
import ArtCulture from './pages/ArtCulture'
import Wellness from './pages/Wellness'
import Announcements from './pages/Announcements'
import Donations from './pages/Donations'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asesorias-colegios" element={<SchoolAdvisory />} />
          <Route path="/arte-cultura" element={<ArtCulture />} />
          <Route path="/bienestar" element={<Wellness />} />
          <Route path="/convocatorias" element={<Announcements />} />
          <Route path="/donaciones" element={<Donations />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Methodology from './pages/Methodology';
import PrimaryMethodology from './pages/PrimaryMethodology'; // Nueva página
import SecondaryMethodology from './pages/SecondaryMethodology'; // Nueva página

function App() {
  return (
    <Router>
      <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-[80px] grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/sedes" element={<Locations />} />
            <Route path="/metodologia" element={<Methodology />} />
            {/* Nuevas rutas específicas */}
            <Route path="/metodologia/primaria" element={<PrimaryMethodology />} />
            <Route path="/metodologia/secundaria" element={<SecondaryMethodology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
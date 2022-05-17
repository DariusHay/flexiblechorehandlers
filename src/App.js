import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutOwner from './pages/AboutOwner';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/flexiblechorehandlers" element={<Home />} />
        <Route exact path="/about-owner" element={<AboutOwner />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

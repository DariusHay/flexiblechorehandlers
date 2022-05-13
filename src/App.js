import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutOwner from './pages/AboutOwner';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-owner" element={<AboutOwner />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

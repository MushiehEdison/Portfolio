import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './content/About';
import Projects from './content/Projects';
import Skills from './content/Skills';
import Startup from './content/StartUp';
import Gallery from './content/Gallery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
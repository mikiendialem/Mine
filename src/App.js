import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Card from './components/Card';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Nav/>} />
          <Route path="/Card" element={<Card/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contact/>} />
        </Routes>
        <Card/>
        <About/>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;

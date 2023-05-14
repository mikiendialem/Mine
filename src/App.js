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
          <Route path="/" exact component={Card} />
          <Route path="/Card" component={Card} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from '../pages/Home';
import Dictionary from '../pages/Dictionary'
import Grammar from '../pages/Grammar';
import Tracker from '../pages/Tracker';
import 'bulma/css/bulma.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </Router>
  );
}
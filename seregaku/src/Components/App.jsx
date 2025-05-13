import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from '../pages/Home';
import Dictionary from '../pages/Dictionary';
import Grammar from '../pages/Grammar';
import Tracker from '../pages/Tracker';
import Login from '../pages/Login';
import 'bulma/css/bulma.css';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UrlShortener from './components/UrlShortener';
import AdminPage from './components/Admin_temp';

function App() {
  return (
    <Router>
      {/* Header Navigation */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      {/* Main content */}
      <Routes>
        <Route path="/" element={<UrlShortener />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;

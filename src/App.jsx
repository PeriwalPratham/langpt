import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EnglishPage from './pages/EnglishPage';
import FrenchPage from './pages/FrenchPage';
import MandarinPage from './pages/MandarinPage';
import HindiPage from './pages/HindiPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/english" element={<EnglishPage />} />
        <Route path="/french" element={<FrenchPage />} />
        <Route path="/mandarin" element={<MandarinPage />} />
        <Route path="/hindi" element={<HindiPage />} />
      </Routes>
    </Router>
  );
}

export default App;


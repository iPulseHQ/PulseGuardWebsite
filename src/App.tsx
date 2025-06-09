import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Status from './pages/Status';
import { DarkModeProvider } from './context/DarkModeContext';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;

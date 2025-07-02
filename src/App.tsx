import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Status from './pages/Status';
import Features from './pages/Features';
import AppPage from './pages/App';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { DarkModeProvider } from './context/DarkModeContext';
import PreloadResources from './components/layout/PreloadResources';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <PreloadResources />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/status" element={<Status />} />
          <Route path="/features" element={<Features />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;

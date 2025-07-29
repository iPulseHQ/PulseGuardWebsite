import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import DetailedFeatures from './pages/DetailedFeatures';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Status from './pages/Status';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import App from './pages/App';
import PulseFiles from './pages/PulseFiles';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/layout/ErrorBoundary';
import { DarkModeProvider } from './context/DarkModeContext';
import './App.css';

const AppRouter: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/detailed" element={<DetailedFeatures />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/status" element={<Status />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/app" element={<App />} />
            <Route path="/pulsefiles" element={<PulseFiles />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </DarkModeProvider>
  );
};

export default AppRouter;

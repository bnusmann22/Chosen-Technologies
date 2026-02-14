import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import PageTransitionOverlay from './components/PageTransitionOverlay';
import { PageTransitionProvider } from './context/PageTransitionContext';
import HomePage from './pages/Home';
import PioneersPage from './pages/Pioneers';
import FeaturesPage from './pages/Features';
import HighlightsPage from './pages/Highlights';
import TestimonialsPage from './pages/Testimonials';
import PricingPage from './pages/Pricing';
import TeamPage from './pages/Team';
import FAQPage from './pages/FAQ';
import BlogPage from './pages/Blog';

export default function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <PageTransitionProvider>
        <Router>
          <AppAppBar />
          <PageTransitionOverlay />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pioneers" element={<PioneersPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/highlights" element={<HighlightsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Router>
      </PageTransitionProvider>
    </AppTheme>
  );
}

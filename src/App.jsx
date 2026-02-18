import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import PageTransitionOverlay from './components/PageTransitionOverlay';
import { PageTransitionProvider } from './context/PageTransitionContext';
import HomePage from './pages/Home';
import PioneersPage from './pages/Pioneers';
import FeaturesPage from './pages/Features';
import HighlightsPage from './pages/Highlights';
import PricingPage from './pages/Pricing';
import TeamPage from './pages/Team';
import FAQPage from './pages/FAQ';
import BlogPage from './pages/Blog';
import SuccessStoriesPage from './pages/SuccessStories';
import AboutPage from './pages/About';
import MissionPage from './pages/Mission';
import CareersPage from './pages/Careers';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import ContactPage from './pages/Contact';

export default function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <PageTransitionProvider>
        <Router>
          <ScrollToTop />
          <AppAppBar />
          <PageTransitionOverlay />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pioneers" element={<PioneersPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/highlights" element={<HighlightsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </PageTransitionProvider>
    </AppTheme>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

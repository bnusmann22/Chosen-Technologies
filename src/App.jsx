import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Pioneers from './components/Pioneers';

function HomePage() {
  return (
    <>
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Team />
        <Divider />
        <CTA />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </>
  );
}

function PioneersPage() {
  return (
    <>
      <Pioneers />
      <Divider />
      <Footer />
    </>
  );
}

export default function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Router>
        <AppAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pioneers" element={<PioneersPage />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

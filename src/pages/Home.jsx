import * as React from 'react';
import Divider from '@mui/material/Divider';
import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import Highlights from '../components/Highlights';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div>
        <LogoCollection />
        <section id="features">
          <Features />
        </section>
        <Divider />
        <section id="testimonials">
          <Testimonials />
        </section>
        <Divider />
        <section id="highlights">
          <Highlights />
        </section>
        <Divider />
        <Team />
        <Divider />
        <CTA />
        <Divider />
        <section id="faq">
          <FAQ />
        </section>
        <Divider />
        <Footer />
      </div>
    </>
  );
}

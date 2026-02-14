import * as React from 'react';
import Divider from '@mui/material/Divider';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function TestimonialsPage() {
  return (
    <PageContainer>
      <Testimonials />
      <Divider />
      <Footer />
    </PageContainer>
  );
}

import * as React from 'react';
import Divider from '@mui/material/Divider';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function FAQPage() {
  return (
    <PageContainer>
      <FAQ />
      <Divider />
      <Footer />
    </PageContainer>
  );
}

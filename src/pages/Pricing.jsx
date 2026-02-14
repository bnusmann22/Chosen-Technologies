import * as React from 'react';
import Divider from '@mui/material/Divider';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function PricingPage() {
  return (
    <PageContainer>
      <Pricing />
      <Divider />
      <Footer />
    </PageContainer>
  );
}

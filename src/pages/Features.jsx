import * as React from 'react';
import Divider from '@mui/material/Divider';
import Features from '../components/Features';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function FeaturesPage() {
  return (
    <PageContainer>
      <Features />
      <Divider />
      <Footer />
    </PageContainer>
  );
}

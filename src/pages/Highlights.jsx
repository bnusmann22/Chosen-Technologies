import * as React from 'react';
import Divider from '@mui/material/Divider';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function HighlightsPage() {
  return (
    <PageContainer>
      <Highlights />
      <Divider />
      <Footer />
    </PageContainer>
  );
}

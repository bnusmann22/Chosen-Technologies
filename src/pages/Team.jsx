import * as React from 'react';
import Divider from '@mui/material/Divider';
import Team from '../components/Team';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function TeamPage() {
  return (
    <PageContainer>
      <Team />
      <Divider />
      <Footer />
    </PageContainer>
  );
}

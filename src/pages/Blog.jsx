import * as React from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function BlogPage() {
  return (
    <PageContainer>
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 6, sm: 12 }, pb: { xs: 8, sm: 12 } }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}
          >
            Blog
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
          >
            Stay updated with the latest insights, tips, and news from Chosen Technologies.
          </Typography>
        </Box>

        <Box
          sx={{
            py: 8,
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          <Typography variant="h6">
            📝 Blog posts coming soon...
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Check back for regular updates on industry insights, product launches, and company news.
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </PageContainer>
  );
}

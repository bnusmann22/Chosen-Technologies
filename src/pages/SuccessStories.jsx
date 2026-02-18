import * as React from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

const successStories = [
  {
    title: 'Digital Transformation Success',
    client: 'TechCorp Nigeria',
    result: '300% increase in operational efficiency',
    description: 'We helped TechCorp Nigeria modernize their infrastructure, resulting in significant improvements in productivity and cost savings.',
  },
  {
    title: 'E-Commerce Platform Launch',
    client: 'Kano Market Hub',
    result: '50,000+ users in first 3 months',
    description: 'Successfully launched a comprehensive e-commerce solution that connected local merchants with customers across Nigeria.',
  },
  {
    title: 'Educational System Innovation',
    client: 'Northern Education Board',
    result: 'Reached 100+ schools',
    description: 'Developed and deployed a digital learning management system that transformed education delivery in the region.',
  },
];

export default function SuccessStoriesPage() {
  const theme = useTheme();

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
            Success Stories
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}
          >
            Discover how we've helped businesses and organizations achieve their goals through innovative technology solutions.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {successStories.map((story, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 12px 20px rgba(0,0,0,0.4)'
                      : '0 12px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'text.secondary', mb: 2, fontWeight: 600 }}
                  >
                    {story.client}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.success.main,
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    ✓ {story.result}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {story.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            textAlign: 'center',
            backgroundColor: theme.palette.grey[900],
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Ready to Write Your Success Story?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Let's work together to achieve your goals and create measurable impact.
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </PageContainer>
  );
}

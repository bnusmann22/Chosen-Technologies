import * as React from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Kano, Nigeria',
    type: 'Full-time',
    description: 'We are looking for an experienced full stack developer to join our growing team and build innovative solutions.',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Kano, Nigeria',
    type: 'Full-time',
    description: 'Join us to create beautiful, intuitive user experiences that delight our clients and their customers.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build and maintain robust, scalable infrastructure for our growing portfolio of applications.',
  },
];

export default function CareersPage() {
  const theme = useTheme();

  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}
          >
            Careers
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}
          >
            Join our team of passionate innovators and help shape the future of technology in Africa. 
            At Chosen Technologies, we believe in nurturing talent and creating opportunities for growth.
          </Typography>
        </Box>

        <Box
          sx={{
            mb: 8,
            p: 4,
            borderRadius: 2,
            backgroundColor:theme.palette.grey[900],
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
            Why Work With Us?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  🚀 Growth & Learning
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Continuous learning opportunities and career development pathways
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  💡 Innovation First
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Work on cutting-edge projects using the latest technologies
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  🤝 Collaborative Culture
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Join a supportive team that values your ideas and contributions
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
        >
          Open Positions
        </Typography>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {openPositions.map((position, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 16px rgba(0,0,0,0.4)'
                      : '0 8px 16px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: 2,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}
                      >
                        {position.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        <Chip label={position.department} size="small" color="primary" />
                        <Chip label={position.location} size="small" variant="outlined" />
                        <Chip label={position.type} size="small" variant="outlined" />
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {position.description}
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                      Apply Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            p: 4,
            textAlign: 'center',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.grey[900]
                : theme.palette.primary.main,
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.text.primary
                : theme.palette.primary.contrastText,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Don't See the Right Position?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We're always looking for talented individuals. Send us your resume and let's talk 
            about how you can contribute to our mission.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: theme.palette.mode === 'dark' ? 'primary.main' : 'white',
              borderColor: theme.palette.mode === 'dark' ? 'primary.main' : 'white',
              '&:hover': {
                borderColor: theme.palette.mode === 'dark' ? 'primary.light' : 'grey.300',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </PageContainer>
  );
}

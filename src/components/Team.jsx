import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ZainabiImage from '../Assets/Zainabi.png';
import JamilImage from '../Assets/Jamil.png';
import HafeezImage from '../Assets/Hafeez.png';
import bashirImage from '../Assets/JOGANA.png';

const pioneers = [
  {
    position: 1,
    name: 'Zainab AbdulAzeez',
    role: 'Co-Founder & Project Lead',
    description: 'Co-Founder and Project Lead, Zainab spearheads the vision and strategic direction of Chosen Technologies.',
    image: ZainabiImage,
  },
  {
    position: 2,
    name: 'Abdullahi Muhammad Jamil',
    role: 'Co-Founder & CTO',
    description: 'Co-Founder and Chief Technology Officer, Abdullahi drives technical innovation and architectural excellence.',
    image: JamilImage,
  },
  {
    position: 3,
    name: 'Hafeez Ibrahim Makama',
    role: 'CEO & Trustee',
    description: 'CEO and Trustee, Hafeez leads the organization with strategic vision and operational excellence.',
    image: HafeezImage,
  },
  {
    position: 4,
    name: 'Bashir Abdullahi Ali JOGANA',
    role: 'Trustee',
    description: 'Trustee, Bashir ensures the continuity of our vision and protects our founding principles.',
    image: bashirImage,
  },
  {
    position: 5,
    name: 'Muhammad Ahmad Saeed',
    role: 'Trustee',
    description: 'Trustee, Muhammad Ahmad safeguards the constitutional values and long-term strategy.',
    image: '👨‍💼',
  },
  {
    position: 6,
    name: 'Bilal Usman Inuwa',
    role: 'Trustee',
    description: 'Trustee, Bilal custodian of standards and organizational continuity.',
    image: '👨‍⚖️',
  },
  {
    position: 7,
    name: 'Ahmad Ahmad Ibrahim (Al-Shatrii)',
    role: 'Trustee',
    description: 'Trustee, Ahmad ensures adherence to founding values and long-term vision.',
    image: '👨‍💼',
  },
  {
    position: 8,
    name: 'Rahina Humaiza Hassan',
    role: 'Trustee',
    description: 'Trustee, Rahina brings strategic oversight and protects organizational integrity.',
    image: '👩‍⚖️',
  },
  {
    position: 9,
    name: 'Tahir Yahaya',
    role: 'Trustee',
    description: 'Trustee, Tahir ensures strategic alignment and constitutional compliance.',
    image: '👨‍💼',
  },
  {
    position: 10,
    name: 'Abdurrahman Nasir',
    role: 'Trustee',
    description: 'Trustee, Abdurrahman protects the founding principles and organizational standards.',
    image: '👨‍⚖️',
  },
];

export default function Team() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container
      id="pioneers"
      sx={{
        pt: { xs: 4, sm: 6 },
        pb: { xs: 4, sm: 6 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 4 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
          }}
        >
          Our Pioneers
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: { xs: 2, sm: 4 },
          }}
        >
          The custodians of our vision, standards, and continuity. Our pioneers define long-term strategy and protect our constitution. Based in Kano, Nigeria.
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ width: '100%' }}>
        {pioneers.slice(0, 4).map((member, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.03)',
                border: '1px solid',
                borderColor: theme.palette.divider,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 8px 24px rgba(0,0,0,0.3)'
                      : '0 8px 24px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 3,
                  fontSize: '4rem',
                }}
              >
                {typeof member.image === 'string' && member.image.includes('.png') ? (
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: '150px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  member.image
                )}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2.5, pb: 0 }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: '500',
                    mb: 1,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                  {member.description}
                </Typography>
              </Box>
              <Box sx={{ p: 2.5, pt: 0 }} />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          mt: 6,
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowRightIcon />}
          onClick={() => navigate('/pioneers')}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          View All Pioneers
        </Button>
      </Box>
    </Container>
  );
}

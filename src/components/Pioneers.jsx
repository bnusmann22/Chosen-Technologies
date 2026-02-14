import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const pioneersData = [
  {
    position: 1,
    name: 'Zainab AbdulAzeez',
    role: 'Co-Founder & Project Lead',
    fullBio:
      'As Co-Founder and Project Lead, Zainab AbdulAzeez is the visionary force behind Chosen Technologies. With a passion for transformative technology and social impact, she spearheads strategic initiatives and ensures the organization remains true to its foundational principles. Zainab brings extensive experience in project management and stakeholder alignment, guiding the company\'s long-term roadmap and growth strategy.',
    image: '👩‍💼',
  },
  {
    position: 2,
    name: 'Abdullahi Muhammad Jamil',
    role: 'Co-Founder & CTO',
    fullBio:
      'Abdullahi Muhammad Jamil, Co-Founder and Chief Technology Officer, is the technical architect driving innovation at Chosen Technologies. With deep expertise in software engineering and cloud infrastructure, he designs scalable, secure systems that power our solutions. Abdullahi\'s technical vision ensures the company remains at the forefront of technological advancement while maintaining the highest standards of code quality and system reliability.',
    image: '👨‍💻',
  },
  {
    position: 3,
    name: 'Hafeez Ibrahim Makama',
    role: 'CEO & Trustee',
    fullBio:
      'Hafeez Ibrahim Makama serves as Chief Executive Officer and Trustee, leading Chosen Technologies with strategic vision and operational excellence. His role encompasses ensuring sustainable growth, stakeholder satisfaction, and alignment with the company\'s core mission. Hafeez brings decades of business acumen and is committed to building a legacy of innovation and integrity in the tech industry.',
    image: '👨‍💼',
  },
  {
    position: 4,
    name: 'Bashir Abdullahi Ali JOGANA',
    role: 'Trustee',
    fullBio:
      'Bashir Abdullahi Ali JOGANA serves as Trustee, ensuring the continuity of Chosen Technologies\' vision and protecting the organization\'s founding principles. As a custodian of standards, Bashir ensures that every decision aligns with the company\'s constitutional values and long-term strategic objectives. His oversight guarantees the company\'s sustainable growth and ethical operations.',
    image: '👨‍⚖️',
  },
  {
    position: 5,
    name: 'Muhammad Ahmad Saeed',
    role: 'Trustee',
    fullBio:
      'Muhammad Ahmad Saeed, as Trustee, safeguards the constitutional values and long-term strategic interests of Chosen Technologies. His role involves protecting the company\'s foundational vision while ensuring governance excellence. Muhammad Ahmad brings strategic wisdom and ensures that organizational decisions reflect the company\'s core mission and values.',
    image: '👨‍💼',
  },
  {
    position: 6,
    name: 'Bilal Usman Inuwa',
    role: 'Trustee',
    fullBio:
      'Bilal Usman Inuwa, as Trustee, is a custodian of organizational standards and continuity. He ensures that Chosen Technologies maintains the highest standards of governance and operational excellence. Bilal\'s oversight protects the company\'s integrity and ensures that all initiatives align with the foundational principles established by the pioneers.',
    image: '👨‍⚖️',
  },
  {
    position: 7,
    name: 'Ahmad Ahmad Ibrahim (Al-Shatrii)',
    role: 'Trustee',
    fullBio:
      'Ahmad Ahmad Ibrahim, known as Al-Shatrii, serves as Trustee with a commitment to ensuring adherence to founding values and long-term vision. His role involves strategic oversight and protection of the company\'s constitutional framework. Ahmad brings deep knowledge of organizational governance and ensures every strategic decision aligns with the company\'s core mission.',
    image: '👨‍💼',
  },
  {
    position: 8,
    name: 'Rahina Humaiza Hassan',
    role: 'Trustee',
    fullBio:
      'Rahina Humaiza Hassan, as Trustee, brings strategic oversight and protects organizational integrity at Chosen Technologies. Her role encompasses ensuring that the company\'s growth remains sustainable and values-driven. Rahina is committed to fostering a culture of excellence, innovation, and accountability across the organization.',
    image: '👩‍⚖️',
  },
  {
    position: 9,
    name: 'Tahir Yahaya',
    role: 'Trustee',
    fullBio:
      'Tahir Yahaya, as Trustee, ensures strategic alignment and constitutional compliance within Chosen Technologies. His oversight spans governance, strategic planning, and organizational alignment with founding principles. Tahir is dedicated to maintaining the company\'s reputation for integrity and advancing its mission in the technology sector.',
    image: '👨‍💼',
  },
  {
    position: 10,
    name: 'Abdurrahman Nasir',
    role: 'Trustee',
    fullBio:
      'Abdurrahman Nasir, as Trustee, protects the founding principles and organizational standards of Chosen Technologies. His role ensures that the company\'s growth trajectory remains aligned with its core values and mission. Abdurrahman brings strategic wisdom and is committed to the company\'s sustainable success and positive impact in the technology industry.',
    image: '👨‍⚖️',
  },
];

export default function Pioneers() {
  const theme = useTheme();

  return (
    <Container
      id="pioneers-page"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 4, sm: 8 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 6 },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          gutterBottom
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          Our Pioneers
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.7,
          }}
        >
          The custodians of our vision, standards, and continuity. These ten remarkable individuals define the long-term strategy of Chosen Technologies and protect our constitution. They ensure that every decision aligns with our foundational mission: to deliver excellence and drive measurable impact.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'primary.main',
            mt: 3,
            fontWeight: 600,
          }}
        >
          📍 Based in Kano, Nigeria
        </Typography>
      </Box>

      {/* Section: Founders & Leadership */}
      <Box sx={{ width: '100%', mt: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            mb: 3,
            pb: 2,
            borderBottom: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          Our Founders & Leadership
        </Typography>
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {pioneersData.slice(0, 3).map((pioneer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? theme.palette.grey[900]
                      : theme.palette.background.paper,
                  border: `2px solid ${theme.palette.primary.main}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? '0 12px 32px rgba(0,0,0,0.4)'
                        : '0 12px 32px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 4,
                    fontSize: '5rem',
                  }}
                >
                  {pioneer.image}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 3, pb: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Position {pioneer.position}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      color: 'text.primary',
                    }}
                  >
                    {pioneer.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: '600',
                      mb: 2,
                    }}
                  >
                    {pioneer.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      flexGrow: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {pioneer.fullBio}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Section: Board of Trustees */}
      <Box sx={{ width: '100%', mt: 6 }}>
        <Typography
          variant="h5"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            mb: 3,
            pb: 2,
            borderBottom: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          Board of Trustees
        </Typography>
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {pioneersData.slice(3).map((pioneer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? theme.palette.grey[900]
                      : theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: theme.palette.primary.main,
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
                  {pioneer.image}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2.5, pb: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Position {pioneer.position}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      color: 'text.primary',
                    }}
                  >
                    {pioneer.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: '600',
                      mb: 1.5,
                      fontSize: '0.9rem',
                    }}
                  >
                    {pioneer.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      flexGrow: 1,
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                    }}
                  >
                    {pioneer.fullBio}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission Statement */}
      <Box
        sx={{
          mt: 8,
          p: 4,
          textAlign: 'center',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.background.paper,
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: 2,
          maxWidth: '800px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 2,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '0.9rem',
          }}
        >
          Our Pioneer Principle
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            lineHeight: 1.8,
          }}
        >
          The Pioneers are the custodians of our vision, standards, and continuity. They define the long-term strategy and protect the Constitution, ensuring every action aligns with our founding mission.
        </Typography>
      </Box>
    </Container>
  );
}

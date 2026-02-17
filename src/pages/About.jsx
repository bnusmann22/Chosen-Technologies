import * as React from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function AboutPage() {
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
            About Chosen Technologies
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', lineHeight: 1.8, fontSize: '1.05rem' }}
          >
            A Software & Artificial Intelligence Institution committed to building world-class 
            solutions that solve real human problems through discipline, standards, and execution.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}
          >
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}
          >
            Chosen Technology is not a casual tech group or a startup cluster; we are a disciplined 
            system built on standards, execution, and impact. Founded by visionary pioneers who believe 
            in the transformative power of technology, we were established to bridge the gap between 
            innovative technology solutions and real-world applications in Nigeria and beyond.
          </Typography>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.grey[900],
              border: `2px solid ${theme.palette.primary.main}`,
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.text.primary
                  : theme.palette.primary.contrastText,
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1.5 }}>
              💎 The Meaning of "Chosen"
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Membership is earned, not given. It is defined by commitment, competence, discipline, 
              and measurable impact. We choose excellence, and excellence chooses us.
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8 }}
          >
            We are guided by ten remarkable pioneers — custodians of our vision, standards, and 
            continuity. They define our long-term strategy and protect our constitution, ensuring 
            every action aligns with our founding mission: to deliver excellence and drive measurable impact.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
          >
            Organizational Architecture
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}
          >
            We operate as one unified institution with a central "Core Engine" that powers 
            multiple sector verticals. We do not fragment into separate startups; we build 
            shared excellence.
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}
          >
            Core Departments (The Engine)
          </Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            {[
              {
                title: 'Engineering',
                icon: '⚙️',
                areas: ['Frontend', 'Backend', 'Mobile Development', 'DevOps & Cloud Infrastructure']
              },
              {
                title: 'AI, Data & Research',
                icon: '🤖',
                areas: ['Machine Learning', 'Data Engineering', 'Applied Research', 'Technical Papers']
              },
              {
                title: 'Product, Design & UX',
                icon: '🎨',
                areas: ['UI/UX Design', 'Product Management', 'Prototyping', 'User Research']
              },
              {
                title: 'Quality, Security & Reliability',
                icon: '🛡️',
                areas: ['QA Testing', 'Cybersecurity', 'Performance Optimization', 'System Reliability']
              },
              {
                title: 'Operations, Legal & Partnerships',
                icon: '📋',
                areas: ['Finance', 'Human Resources', 'Legal Compliance', 'Grant Management']
              },
              {
                title: 'Growth & Media',
                icon: '📢',
                areas: ['Marketing Strategy', 'Technical Writing', 'Community Management', 'Brand Development']
              },
            ].map((dept, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 16px rgba(0,0,0,0.3)'
                        : '0 8px 16px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" sx={{ mb: 1.5 }}>
                      {dept.icon}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
                      {dept.title}
                    </Typography>
                    <List dense>
                      {dept.areas.map((area, i) => (
                        <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <ArrowForwardIcon sx={{ fontSize: '1rem', color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={area}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}
          >
            Sector Verticals (Project Focus)
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}
          >
            Each vertical delivers specific solutions utilizing our Core Departments, ensuring 
            excellence across diverse domains:
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              {
                title: 'Civic & Social Systems',
                icon: '🏛️',
                description: 'Governance tools, healthcare solutions, and public service platforms that improve civic life.'
              },
              {
                title: 'Fintech & Economic Tools',
                icon: '💳',
                description: 'Payment systems, SME tools, and financial inclusion platforms for economic empowerment.'
              },
              {
                title: 'Agritech & Food Systems',
                icon: '🌾',
                description: 'Farming tools, supply chain logistics, and market data platforms for agricultural transformation.'
              },
              {
                title: 'EdTech & Knowledge Platforms',
                icon: '📚',
                description: 'Learning management systems, skill development tools, and educational technology solutions.'
              },
            ].map((vertical, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    border: `2px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      backgroundColor:
                        theme.palette.mode === 'dark'
                          ? theme.palette.grey[900]
                          : theme.palette.grey[50],
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 1.5 }}>
                    {vertical.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1.5, color: 'text.primary' }}>
                    {vertical.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {vertical.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
          >
            Leadership Philosophy
          </Typography>
          <Box
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: theme.palette.grey[900],
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main', textAlign: 'center' }}
            >
              Leadership is Service
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, textAlign: 'center' }}>
              Leaders exist to strengthen the system, mentor others, and protect standards. 
              The Pioneers do not hold unilateral power; they operate collectively within 
              the bounds of our Constitution.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
                  The Executive Council
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                  The supreme decision-making body, meeting monthly to steer the institution:
                </Typography>
                <List dense>
                  {[
                    'President / CEO: Vision, external relations, strategic decisions',
                    'Director of Engineering (CTO): System architecture, technical standards',
                    'Director of Research & AI: Research agenda, data strategy, innovation',
                    'Director of Product & Design: UX, product strategy, prototyping',
                    'Director of Operations (COO): Finance, legal, HR, logistics',
                  ].map((role, i) => (
                    <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                      <ListItemText
                        primary={role}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
                  The Pioneers (Founders)
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  The custodians of vision, standards, and continuity. They define long-term 
                  strategy and protect the Constitution, ensuring every action aligns with our 
                  founding mission.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
          >
            Talent Pipeline & Membership
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}
          >
            Membership is conditional and revocable based on performance. Promotion is based 
            on technical output, consistency, and documentation—not tenure.
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                level: 'Associate',
                subtitle: 'Learner',
                description: 'Under supervision; learning the standards and building fundamental skills.',
                color: '#90CAF9'
              },
              {
                level: 'Engineer',
                subtitle: 'Contributor',
                description: 'Active contributor with specific responsibilities and proven reliability.',
                color: '#66BB6A'
              },
              {
                level: 'Senior Engineer',
                subtitle: 'Mentor',
                description: 'High technical output; mentors associates and drives quality standards.',
                color: '#FFA726'
              },
              {
                level: 'Fellow',
                subtitle: 'Architect',
                description: 'Strategic leader driving institutional direction and long-term vision.',
                color: '#AB47BC'
              },
            ].map((tier, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    border: `2px solid ${tier.color}`,
                    backgroundColor: theme.palette.grey[900],
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', mb: 0.5, color: tier.color }}
                  >
                    {tier.level}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', fontStyle: 'italic', display: 'block', mb: 2 }}
                  >
                    {tier.subtitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {tier.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 2,
                backgroundColor: theme.palette.grey[900],
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}
              >
                🎯 Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                To be the leading technology partner driving digital transformation across Africa, 
                creating sustainable solutions that empower businesses and communities.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 2,
                backgroundColor: theme.palette.grey[900],
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}
              >
                💡 Our Values
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Excellence, Innovation, Integrity, and Impact guide every decision we make. 
                We believe in building lasting relationships and delivering solutions that matter.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 2,
                backgroundColor: theme.palette.grey[900],
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}
              >
                🌍 Our Impact
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                From Kano to the world, we're committed to creating technology solutions that 
                transform businesses, empower communities, and drive economic growth.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            p: 4,
            textAlign: 'center',
            backgroundColor: theme.palette.grey[900],
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.contrastText,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Community Engagement
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            We are committed to organizing hackathons and innovation programs, participating in 
            national and international competitions, and mentoring young innovators. Community 
            impact is a core responsibility, not an optional activity.
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            Want to learn more about our pioneers or explore how we can work together?
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </PageContainer>
  );
}

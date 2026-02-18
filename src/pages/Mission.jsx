import * as React from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function MissionPage() {
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
            Our Mission & Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '900px', mx: 'auto', lineHeight: 1.8, fontSize: '1.1rem' }}
          >
            Chosen Technologies is a Software & Artificial Intelligence Institution committed to building 
            world-class solutions that solve real human problems. We are not a casual tech group or a 
            startup cluster; we are a disciplined system built on standards, execution, and impact.
          </Typography>
        </Box>

        <Box
          sx={{
            mb: 8,
            p: 4,
            borderRadius: 2,
            border: `2px solid ${theme.palette.primary.main}`,
            backgroundColor:theme.palette.grey[900],
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}
              >
                🎯 Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.primary', lineHeight: 1.9, fontSize: '1.05rem' }}
              >
                To design, build, and scale technology products (software & AI) that address 
                real-world problems, starting from Arewa to the world.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}
              >
                🌍 Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.primary', lineHeight: 1.9, fontSize: '1.05rem' }}
              >
                To become the leading technology institution in Northern Nigeria, scaling 
                nationally and internationally with globally competitive products.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary', textAlign: 'center' }}
          >
            Core Principles
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 4, textAlign: 'center', maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}
          >
            All members and leaders are bound by the following non-negotiable values that define 
            who we are and how we operate:
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: '💪',
                title: 'Discipline Over Talent',
                description: 'Talent without discipline is a liability. We prioritize consistency, structure, and reliability over raw ability.'
              },
              {
                icon: '⚡',
                title: 'Standards Over Excuses',
                description: 'We meet requirements or we do not ship. There is no middle ground. Quality is non-negotiable.'
              },
              {
                icon: '🎯',
                title: 'Impact Over Appearance',
                description: 'Success is measured by outcomes, not noise. We focus on creating real, measurable change.'
              },
              {
                icon: '🚀',
                title: 'Execution Over Ideas',
                description: 'Ideas are cheap; delivery is rare. We value those who build and ship over those who merely suggest.'
              },
              {
                icon: '🔒',
                title: 'Integrity Without Compromise',
                description: 'Trust is the currency of our institution. We protect it fiercely through transparent and ethical conduct.'
              },
              {
                icon: '🤝',
                title: 'Collaboration Without Ego',
                description: 'No individual is bigger than the system. We succeed together or we fail together.'
              },
            ].map((principle, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: theme.palette.primary.main,
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 16px rgba(0,0,0,0.3)'
                        : '0 8px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ mb: 2 }}
                  >
                    {principle.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', mb: 1.5, color: 'text.primary' }}
                  >
                    {principle.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {principle.description}
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
            Annual Project Framework
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}
          >
            The institution executes a minimum of 4 Major Projects per year (one per vertical). 
            Every project follows a disciplined lifecycle that ensures quality and real-world impact:
          </Typography>
          <Grid container spacing={2}>
            {[
              { step: '1', title: 'Problem Statement', desc: 'Identify real problems worth solving, from local to scalable' },
              { step: '2', title: 'Research & Feasibility', desc: 'Deep analysis to validate assumptions and define requirements' },
              { step: '3', title: 'Architecture Design', desc: 'Plan system structure, technology stack, and scalability' },
              { step: '4', title: 'Development & Testing', desc: 'Build with quality standards and rigorous testing protocols' },
              { step: '5', title: 'Deployment', desc: 'Launch to real users and gather feedback for iteration' },
              { step: '6', title: 'Documentation & Case Study', desc: 'Document learnings and create knowledge for the community' },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    backgroundColor:theme.palette.grey[900],
                    border: `2px solid ${theme.palette.primary.main}`,
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.desc}
                    </Typography>
                  </Box>
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
            Scaling Strategy
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: `2px solid ${theme.palette.primary.main}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  📍 Years 1–2
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Establish regional leadership and build strong internal culture with proven execution capabilities.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: `2px solid ${theme.palette.primary.main}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  🚀 Years 3–4
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Achieve national visibility and successfully spin-off products that create independent value.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: `2px solid ${theme.palette.primary.main}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  🌍 Years 5+
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  International collaboration and global product distribution with world-class standards.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
          >
            Non-Negotiable Operational Rules
          </Typography>
          <List>
            {[
              'No shallow projects — Every project must solve a real problem with measurable impact',
              'No trend chasing — We build for value, not for hype or temporary relevance',
              'Documentation is mandatory — All work must be properly documented for continuity',
              'Quality over speed — We ship when it\'s ready, not when it\'s rushed',
              'Ethics first — No compromises on integrity, privacy, or user trust',
            ].map((rule, index) => (
              <ListItem key={index} sx={{ py: 1.5 }}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={rule}
                  primaryTypographyProps={{
                    variant: 'body1',
                    color: 'text.primary',
                    sx: { lineHeight: 1.7 }
                  }}
                />
              </ListItem>
            ))}
          </List>
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
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}
          >
            Trust & Ethical Conduct
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
            Trust is the backbone of Chosen Technologies. We build it through consistent delivery, 
            transparency in decisions and finance, honest communication, and respect for agreements.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            How We Build Trust:
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {[
              'Consistent delivery on promises and commitments',
              'Complete transparency in decisions and financial matters',
              'Honest communication at all levels',
              'Unwavering respect for agreements and standards',
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                  <CheckCircleIcon sx={{ color: 'success.main', mt: 0.5, fontSize: '1.2rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', mt: 2 }}>
            Breaches of trust — including dishonesty, undocumented decisions, abuse of authority, 
            or financial misconduct — are treated as critical offenses with serious consequences, 
            regardless of rank or position.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
          >
            Intellectual Property & Creative Recognition
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
            At Chosen Technologies, we treat ideas as assets, not favors. Creativity is encouraged 
            when contributors know their ideas will be protected, acknowledged, and fairly rewarded.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor:theme.palette.grey[900],
                  border: `2px solid ${theme.palette.primary.main}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  🔐 Protection
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Every documented idea is officially recorded with its originator. This prevents 
                  idea theft and ensures proper attribution throughout the project lifecycle.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                backgroundColor:theme.palette.grey[900],
                border: `2px solid ${theme.palette.primary.main}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  ⭐ Recognition
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Contributors receive permanent recognition in documentation, websites, publications, 
                  and product credits. Your contribution is never erased.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor:theme.palette.grey[900],
                  border: `2px solid ${theme.palette.primary.main}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  💰 Rewards
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Idea originators receive project leadership opportunities, revenue share based on 
                  contribution level, and long-term equity in spin-offs and licensed products.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor:theme.palette.grey[900],
                  border: `2px solid ${theme.palette.primary.main}`,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  🤝 Collaboration
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Open collaboration is encouraged without fear. Clear ownership rules and guaranteed 
                  attribution unlock creativity across the institution.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            mt: 8,
            p: 4,
            textAlign: 'center',
            backgroundColor:theme.palette.grey[900],
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.text.primary
                : theme.palette.primary.contrastText,
            borderRadius: 2,
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Our Commitment
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, maxWidth: '800px', mx: 'auto' }}>
            "Chosen Technologies stands for excellence, discipline, and impact. We build carefully. 
            We execute relentlessly. We scale responsibly. This mission binds all members, leaders, 
            and executives to that cause."
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </PageContainer>
  );
}

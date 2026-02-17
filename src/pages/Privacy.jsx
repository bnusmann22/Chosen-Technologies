import * as React from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function PrivacyPage() {
  const theme = useTheme();

  return (
    <PageContainer>
      <Container maxWidth="md" sx={{ py: { xs: 8, sm: 12 } }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}
          >
            Privacy Policy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Last Updated: February 17, 2026
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            Introduction
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            At Chosen Technologies, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website or use our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            Information We Collect
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            We may collect information about you in a variety of ways. The information we may collect 
            includes:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <li>
              <strong>Personal Data:</strong> Name, email address, phone number, and other contact 
              information you provide to us
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our website and services
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device information, and 
              analytics data
            </li>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            We use the information we collect to:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Communicate with you about our services, updates, and promotional offers</li>
            <li>Process your transactions and manage your orders</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze usage patterns and improve user experience</li>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            Data Security
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            Your Rights
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            You have the right to:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Withdraw consent at any time</li>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            If you have any questions or concerns about this Privacy Policy or our data practices, 
            please contact us at:
          </Typography>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.grey[900],
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Chosen Technologies
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Kano, Nigeria
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Email: privacy@chosentechnologies.com
            </Typography>
          </Box>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </PageContainer>
  );
}

import * as React from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

export default function TermsPage() {
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
            Terms of Service
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Last Updated: February 17, 2026
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            1. Agreement to Terms
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            By accessing and using Chosen Technologies' website and services, you agree to be bound 
            by these Terms of Service and all applicable laws and regulations. If you do not agree 
            with any of these terms, you are prohibited from using or accessing our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            2. Use License
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            Permission is granted to temporarily access the materials on Chosen Technologies' 
            website for personal, non-commercial transitory viewing only. This is the grant of a 
            license, not a transfer of title, and under this license you may not:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or public display</li>
            <li>Attempt to decompile or reverse engineer any software on our website</li>
            <li>Remove any copyright or proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            3. Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            Chosen Technologies provides technology solutions and consulting services. We reserve 
            the right to modify, suspend, or discontinue any aspect of our services at any time 
            without prior notice.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            4. User Responsibilities
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            When using our services, you agree to:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use our services for any unlawful or prohibited purpose</li>
            <li>Not interfere with or disrupt our services or servers</li>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            5. Intellectual Property
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            All content, features, and functionality on our website and services, including but not 
            limited to text, graphics, logos, and software, are the exclusive property of Chosen 
            Technologies and are protected by international copyright, trademark, and other 
            intellectual property laws.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            6. Limitation of Liability
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            In no event shall Chosen Technologies or its suppliers be liable for any damages 
            (including, without limitation, damages for loss of data or profit, or due to business 
            interruption) arising out of the use or inability to use our services, even if Chosen 
            Technologies or an authorized representative has been notified of the possibility of such damage.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            7. Governing Law
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            These terms and conditions are governed by and construed in accordance with the laws of 
            Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            8. Changes to Terms
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            We reserve the right to revise these Terms of Service at any time. By continuing to use 
            our services after such modifications, you agree to be bound by the revised terms.
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: theme.palette.grey[900],
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Information
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            If you have any questions about these Terms of Service, please contact us:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Chosen Technologies
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Kano, Nigeria
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Email: legal@chosentechnologies.com
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Footer />
    </PageContainer>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function CTA() {
  const theme = useTheme();

  return (
    <Container
      id="cta"
      sx={{
        py: { xs: 4, sm: 6 },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 4 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '70%' },
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          Ready to Transform Your Ideas?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          Join hundreds of businesses leveraging our innovative solutions to drive growth and success. Let's build something amazing together.
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ width: '100%', justifyContent: 'center' }}
        useFlexGap
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<SendRoundedIcon />}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Get Started Today
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Schedule a Demo
        </Button>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mt: 2,
        }}
      >
        No credit card required • Free initial consultation • Response within 24 hours
      </Typography>
    </Container>
  );
}

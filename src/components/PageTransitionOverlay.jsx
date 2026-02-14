import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import { usePageTransition } from '../context/PageTransitionContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export default function PageTransitionOverlay() {
  const { isLoading } = usePageTransition();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        pointerEvents: isLoading ? 'auto' : 'none',
        animation: isLoading ? `${fadeIn} 0.3s ease-in-out` : `${fadeOut} 0.3s ease-in-out`,
        opacity: isLoading ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <CircularProgress
        size={60}
        sx={{
          color: 'primary.main',
        }}
      />
    </Box>
  );
}

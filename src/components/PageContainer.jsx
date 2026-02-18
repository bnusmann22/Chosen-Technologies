import React from 'react';
import { Box, keyframes } from '@mui/material';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function PageContainer({ children }) {
  return (
    <Box
      sx={(theme) => ({
        animation: `${fadeInUp} 0.6s ease-out`,
        pt: {
          xs: `calc(${theme.mixins.toolbar.minHeight}px + 24px)`,
          sm: 0,
        },
      })}
    >
      {children}
    </Box>
  );
}

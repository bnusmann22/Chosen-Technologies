import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import ChosenTechLogo from './SitemarkIcon';
import { usePageTransition } from '../context/PageTransitionContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => {
    startTransition();
    setOpen(false);
    // Navigate after showing loading animation
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <ChosenTechLogo />
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => handleNavigation('/features')}
              >
                Features
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => handleNavigation('/highlights')}
              >
                Highlights
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => handleNavigation('/pioneers')}
              >
                Pioneers
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => handleNavigation('/pricing')}
              >
                Pricing
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small" 
                sx={{ minWidth: 0 }}
                onClick={() => handleNavigation('/faq')}
              >
                FAQ
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small" 
                sx={{ minWidth: 0 }}
                onClick={() => handleNavigation('/blog')}
              >
                Blog
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="contained" size="small" href="/contact">
              Contact
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem onClick={() => handleNavigation('/features')}>Features</MenuItem>
                <MenuItem onClick={() => handleNavigation('/highlights')}>Highlights</MenuItem>
                <MenuItem onClick={() => handleNavigation('/pricing')}>Pricing</MenuItem>
                <MenuItem onClick={() => handleNavigation('/faq')}>FAQ</MenuItem>
                <MenuItem onClick={() => handleNavigation('/blog')}>Blog</MenuItem>
                <MenuItem>
                  <Button color="primary" variant="contained" href="/contact">
                    Contact
                  </Button>
                </MenuItem>
                <Divider sx={{ my: 3 }} />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

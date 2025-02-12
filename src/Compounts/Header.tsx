import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/image.png';

const pages = ['Home', 'Courses', 'Live Projects', 'For Colleges', 'For Startups', 'About Us', 'Contact Us'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
   // Scroll to ContactForm section
   const handleScrollToContact = () => {
    const section = document.getElementById('ContactForm');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#171717', top: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ px: '16px', py: '1px', color: '#D1D5DB' }}> {/* ✅ Padding 8px,12px */}
          {/* ✅ LOGO */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img src={Logo} alt="Logo" style={{ height: 40 }} />
          </Box>

          {/* ✅ Mobile Menu Icon (Aligned to the Right) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleScrollToContact}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontFamily: ', "Apple", sans-serif', // ✅ Font applied
                      fontSize: '16px', // ✅ Font size set
                      textTransform: 'capitalize', // ✅ First letter capitalized
                      backgroundColor: page === 'Contact Us' ? '#14B8A6' : 'transparent', 
                      color: page === 'Contact Us' ? '#fff' : 'inherit', 
                      px: 2,
                      py: 1,
                      borderRadius: '4px',
                      '&:hover': {
                        backgroundColor: page === 'Live Projects' ? '#0D9488' : 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ✅ Desktop Menu - Right Aligned */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',px: '16px', py: '1px' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleScrollToContact}
                sx={{
                  my: 2,
                  color: 'white',
                  padding: '4px 20px',
                  display: 'block',
                  fontFamily: '', // ✅ Font applied
                  fontSize: '16px', // ✅ Font size set
                  textTransform: 'capitalize', // ✅ First letter capitalized
                  backgroundColor: page === 'Contact Us' ? '#14B8A6' : 'transparent',
                  '&:hover': {
                    backgroundColor: page === 'Contact Us' ? '#0D9488' : 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

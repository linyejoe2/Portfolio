import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useScrollTrigger } from '@mui/material';
import { themeActions, store, TStore } from '../service/store';
import Theme from '../theme';
import { useSelector } from 'react-redux';


const pages = ['Home', 'About', 'Projects', 'Resume', 'Blogs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface Props {
  children: React.ReactElement;
}

export default function TopNavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleNavClick = (event: React.MouseEvent<HTMLElement>) => {
    const pageName = event.currentTarget.id
    if (pages.indexOf(pageName) == -1) return
    // if (pageName == 'Home') {}
    if (pageName == 'About') { store.dispatch(themeActions.setTheme("dark")) }
    if (pageName == 'Projects') { store.dispatch(themeActions.setTheme("light")) }
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ElevationScroll>
      <AppBar component="nav" >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                // display: { xs: 'none', md: 'flex' },
                display: 'flex',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Randy Lin
            </Typography>
            <Typography sx={{ color: Theme().palette.text.primary }}>
              {/* {store.getState().theme} */}
              {useSelector((s: TStore) => s.theme)}
            </Typography>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: "flex-end",
              marginRight: { xs: '20px', md: '40px' }
            }}>
              {pages.map((page) => (
                <Button
                  id={page}
                  key={page}
                  onClick={handleNavClick}
                  sx={{ my: 2, color: Theme().palette.text.secondary, display: 'block' }}
                >
                  <span>
                    {page}
                  </span>
                </Button>
              ))}

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{
              flexGrow: 0,
              '@media (max-width: 900px)': {
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%'
              }
            }}>
              <Tooltip title="Open settings">
                <IconButton size="large" onClick={handleOpenUserMenu}>
                  {/* <svg fill={Theme.darkMode.palette.text.primary} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg> */}
                  <svg fill={Theme().palette.text.primary} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll >
  );
}

function ElevationScroll(props: Props) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    style: {
      ...(trigger ? {
        backdropFilter: 'blur(5px)',
        backgroundImage: "none",
        backgroundColor: 'rgba(255, 255, 255, .15)',
      } : {
        boxShadow: 'none',
        backgroundImage: "none",
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }),
      // transition: 'all 1s',
      // transition: 'background-color 1s',
      transition: 'background-color 1s, box-shadow 1s, backdrop-filter 1s',
      marginLeft: 'calc(100vw - 100%)'
    }
  });
}
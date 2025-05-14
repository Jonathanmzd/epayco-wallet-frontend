import { Outlet, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ePayco Wallet
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                aria-controls={open ? 'main-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="main-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'menu-button',
                  autoFocus: true,
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem component={Link} to="/" onClick={handleClose}>
                  Inicio
                </MenuItem>
                <MenuItem component={Link} to="/register" onClick={handleClose}>
                  Registrar
                </MenuItem>
                <MenuItem component={Link} to="/recharge" onClick={handleClose}>
                  Recargar
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box component="nav">
              <Box component="ul" sx={{ display: 'flex', listStyle: 'none', m: 0, p: 0 }}>
                <Box component="li" sx={{ mr: 1 }}>
                  <Button
                    color="primary"
                    component={Link}
                    to="/"
                    variant="outlined"
                  >
                    Inicio
                  </Button>
                </Box>
                <Box component="li" sx={{ mr: 1 }}>
                  <Button
                    color="primary"
                    component={Link}
                    to="/register"
                    variant="outlined"
                  >
                    Registrar
                  </Button>
                </Box>
                <Box component="li">
                  <Button
                    color="primary"
                    component={Link}
                    to="/recharge"
                    variant="outlined"
                  >
                    Recargar
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;

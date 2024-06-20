"use client"; 
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Search from '@mui/icons-material/Search';
import Link from 'next/link';

const pages = [ 'About', 'Portfolio',];
const settings = ['Telephone', 'Email', 'Download CV', ];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar  
    sx={{
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: 'none', // Remove drop shadow
        borderBottom: '2px solid black' // Add black line at the bottom
      }}
    position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters> 
{/*         <img src="/world.svg" alt="World" style={{ maxHeight: 28 }} />
 */}        
   <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml:2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'atlas',
              fontWeight: 700,
              letterSpacing: '0.3rem',
              color: 'black',
              textDecoration: 'none',
              width:148
            }}
          >
          <img src="/world.svg" alt="World" style={{ maxWidth: 28, marginRight: 10}} /> PHYSIS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>

            <Drawer open={open} onClose={() => setOpen(false)}
            
            sx={{
                '& .MuiDrawer-content': {
                  backgroundColor: '#E9D654',
                },
              }}
>
<Typography
            variant="h5"
            
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              justifyContent:"center",
              display:'flex' ,
              fontFamily: 'atlas',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',marginTop:2
            }}
          >
<img src="/world.svg" alt="World" style={{ maxHeight: 38, marginTop:-5}} />

            PHYSIS
          </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >



            
       {/*    <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer' }}
          >
            Close
          </Typography> */}
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
    {/*     <Input
          size="sm"
          placeholder="Buscar"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              'aria-label': 'Search anything',
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            fontFamily: 'atlas',
            borderBottom: '2px black solid',
            borderColor: 'neutral.outlinedBorder',
            '&:hover': {
              borderColor: 'black',
            },
            '&::before': {
              border: 'black',
              transform: 'scaleX(0)',
              left: 0,
              right: 0,
              bottom: '-2px',
              top: 'unset',
              transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
              borderRadius: 0,
            },
            '&:focus-within::before': {
              transform: 'scaleX(1)',
            },
          }}
        /> */}
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            fontFamily: 'atlas',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <div>
      
      <Link href="/" passHref>
        <ListItemButton component="a" sx={{ fontWeight: 'lg', justifyContent:'center' }}>About</ListItemButton>
      </Link>
      <Link href="/portfolio" passHref>
        <ListItemButton component="a" sx={{ fontWeight: 'lg', justifyContent:'center' }}>Portfolio</ListItemButton>
      </Link>
     {/*  <Link href="/contact" passHref>
        <ListItemButton component="a" sx={{ fontWeight: 'lg', justifyContent:'center' }}>Contact</ListItemButton>
      </Link> */}
    </div>
        </List>
      </Drawer>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ fontFamily: 'atlas'}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
{/*           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
 */}         
  <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'atlas',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
                     <img src="/world.svg" alt="World" style={{ maxHeight: 28 }} />

            PHYSIS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={page == 'About' ? "/" : page.toLowerCase()}
                sx={{ my: 2, color: 'black', display: 'block',  fontFamily: 'atlas', }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
{/*               <img src="/world.svg" alt="World" style={{ maxHeight: 28 }} />
 */}                <Avatar alt="Remy Sharp" src="/world.svg" />
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

                  <Typography textAlign="center"><a href={setting == "Telephone" ? "tel:+525631399280" : setting == "Email" ? "mailto:octaviomrq@gmail.com" : setting == "Download CV" ? "/AOMA_CV_2024.pdf" : "" }         download={setting === "Download CV" ? "AOMA_CV_2024.pdf" : undefined}
                  >{setting}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

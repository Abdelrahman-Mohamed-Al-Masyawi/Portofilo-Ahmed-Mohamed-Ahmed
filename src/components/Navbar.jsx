import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

export default function Navbar({ toggleLanguage, toggleTheme, currentLang, isDark }) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const navItems = ['home', 'objective', 'skills', 'experience', 'education', 'certificates', 'contact'];

  const handleNavClick = (section) => {
    setOpen(false);

    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        const yOffset = -80; // ارتفاع النافبار
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300); // 🔥 مهم جدًا مع Material UI
  };

  return (
    <>
      {/* NAVBAR */}
      <AppBar
        sx={{
          background: isDark ? '#0f172a' : '#ffffff',
          color: isDark ? '#fff' : '#000',
        }}
        position='sticky'>
        <Toolbar>
          {/* Logo */}
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
           {t( "nav.name")}
          </Typography>

          {/* Menu Button */}
          <IconButton color='inherit' onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 270, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* HEADER (Close Button) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #eee',
            }}>
            <Typography fontWeight='bold'>Menu</Typography>

            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* NAV ITEMS */}
          <List>
            {navItems.map((item) => (
              <ListItem style={{cursor:"pointer"}} button key={item} onClick={() => handleNavClick(item)}>
                <ListItemText primary={t(`nav.${item}`)} />
              </ListItem>
            ))}
          </List>

          {/* CONTROLS */}
          <Box sx={{ mt: 'auto', p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button fullWidth variant='contained' onClick={toggleLanguage}>
              {currentLang === 'en' ? 'Arabic' : 'English'}
            </Button>

            <Button fullWidth variant='outlined' onClick={toggleTheme}>
              {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

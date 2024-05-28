import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MuiLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

import * as locales from '@mui/material/locale';
import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = React.useState(i18n.language);


  const theme = useTheme();

  React.useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ mr: -0.5 }}>
              {currentLanguage.toLocaleUpperCase()}
            </Typography>
            <IconButton onClick={handleClick}>
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage('de')}>Deutsch</MenuItem>
            </Menu>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
          >
            {sections.map((section) => (
              <MuiLink
                component={RouterLink}
                to={section.url}
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </MuiLink>
            ))}
          </Toolbar>
      </Box>
    </React.Fragment>
  );
}

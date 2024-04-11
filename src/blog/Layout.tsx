import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface LayoutProps {
    children: ReactNode;
  }

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About Me', url: '/aboutMe' },
  { title: 'About This Website', url: '/aboutThisWebsite' },
  { title: 'Tech Insights (Coming soon)', url: '/techInsights' },
  { title: 'Latest Posts (Coming soon)', url: '/latestPosts' },
  { title: 'Contact Me (Coming soon)', url: '/contactMe' },
  { title: 'Imprint', url: '/imprint' },
];

// TODO: Passen Sie theme nach Bedarf an
const defaultTheme = createTheme();

let GitHub = {
  name: 'GitHub',
  icon: GitHubIcon,
  url: 'https://github.com/ceajay09/Webclient.git'
}

let LinkedIn = {
  name: 'LinkedIn',
  icon: LinkedInIcon,
  url: 'https://linkedin.com/in/cesar-jaquiéry-9215aa179'
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Welcome to César's Webpage" sections={sections} />
        <main>{children}</main>
        <Footer
          title="Connect With Me"
          description="From inquiries to collaborations, I'm just a message away."
        />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

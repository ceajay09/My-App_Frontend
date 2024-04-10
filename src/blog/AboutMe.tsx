

import * as React from 'react';
import { Container, Grid, Paper, Box, Typography, CssBaseline, ThemeProvider, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';
import DownloadIcon from '@mui/icons-material/Download';

const theme = createTheme();

export default function AboutMe() {
  // const fetchData = async () => {
  //   try {
  //     // Beispiel-URL, ersetzen Sie diese durch Ihre eigene Anfrage-URL
  //     const response = await fetch('http://localhost:8080/api/downloadPDF/CV_Jaquiery_Cesar.pdf');
  //     const data = await response.json();
  //     console.log(data);
  //     // Hier könnten Sie die Daten weiterverarbeiten oder den State aktualisieren
  //   } catch (error) {
  //     console.error('Es gab ein Problem mit der Fetch-Anfrage:', error);
  //   }
  // };

  return (
    <Layout>
      <main>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
            About Me
          </Typography>
          <Grid container spacing={3}>
            {/* Linke Spalte für Foto und Kontaktdaten */}
            <Grid item xs={12} md={5}>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/Passfoto.jpg`} alt="Image of myself" style={{ width: '100%', height: 'auto' }} />
              </Paper>
              <Paper elevation={4} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>Contact Details</Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Qualification:</span>
                  <span>Business Information BSc (FHNW)</span>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Age:</span>
                  <span>28</span>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Birthday:</span>
                  <span>11.01.1996</span>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Phone Number:</span>
                  <span>+41 76 759 83 45</span>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>E-Mail:</span>
                  <span>c.jaquiery@gmail.com</span>
                </Typography>
                <Typography component="div" variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Based in:</span>
                  <span>Basel, Switzerland</span>
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="http://localhost:8080/api/downloadPDF/CV_Jaquiery_Cesar.pdf"
                  sx={{ marginTop: 2 }}
                >
                  Download CV
                </Button>
              </Paper>
            </Grid>
            {/* Rechte Spalte für zusätzliche Informationen */}
            <Grid item xs={12} md={7}>
              {/* Obere Box/Grid */}
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>Hello, it's me César</Typography>
                <Typography variant="body1">From a young age, I've been fascinated by the world of software
                  development, with a particular focus on Java. My experience as a working student in a
                  leading CDMO company has significantly shaped my understanding of modern technologies
                  and software development methodologies. This experience, combined with my ongoing commitment
                  to expanding my knowledge through reading technical books, especially on topics like Design
                  Patterns, has fueled my passion for the field.with a particular focus on Java.<br />
                  <br /></Typography>
                <Typography variant="body1">My journey in software development is not just about
                  acquiring knowledge; it's about applying what I learn to solve real-world problems.
                  I'm constantly seeking opportunities to grow professionally and take on responsibilities
                  in specific areas of expertise. I'm eager to work in dynamic environments that drive
                  innovations, bringing my technical skills, creativity, and ability to work in a team
                  to make a substantial impact.<br/>
                  <br /></Typography>
                <Typography variant="body1"> I'm excited about the possibilities that lie ahead and
                  look forward to contributing to meaningful projects that make a difference. Let's
                  embark on this journey together and explore how we can create innovative solutions
                  that shape the future.</Typography>
              </Paper>
              {/* Untere Boxen/Grids */}
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Paper elevation={4} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>Projects</Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Bachelor Thesis:
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Concept for the implementation of NFT-based certificates of authenticity
                    </Typography>
                    <Typography variant="body2">
                      <ul>
                        <li>Research NFT technology for stronger customer loyalty in the company</li>
                        <li>Analyze and propose implementation options</li>
                        <li>Create a step-by-step implementation guide for the company</li>
                      </ul><br /></Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Practical Project:
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Strategic analysis and optimization of the ERP data model
                    </Typography>
                    <Typography variant="body2">
                      <ul>
                        <li>Visualize the data flow of business processes</li>
                        <li>Carry out requirements analysis</li>
                        <li>Propose system improvements</li>
                      </ul></Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={4} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>Interests</Typography>
                    <Typography variant="body2">                      <ul>
                        <li>Test </li>
                        <li>Test out </li>
                        <li>Test</li>
                      </ul></Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Layout>

  );
}

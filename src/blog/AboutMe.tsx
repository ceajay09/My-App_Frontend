import * as React from 'react';
import { Container, Grid, Paper, Box, Typography, CssBaseline, ThemeProvider, Button, Link } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';
import DownloadIcon from '@mui/icons-material/Download';

const theme = createTheme();
const practicalProjectURL = "https://studierendenprojekte.wirtschaft.fhnw.ch/view/2750"
const bachelorProjectURL = "https://studierendenprojekte.wirtschaft.fhnw.ch/view/2019"

export default function AboutMe() {
  return (
    <Layout>
      <main>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
            About Me
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/Passfoto.jpg`} alt="Image of myself" style={{ width: '100%', height: 'auto' }} />
              </Paper>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
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
                <Button //TODO: Try catch
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="/api/downloadPDF/CV_Jaquiery_Cesar.pdf"
                  sx={{ marginTop: 2 }}
                >
                  Download CV
                </Button>
              </Paper>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>Interests</Typography>
                    <Typography variant="body1"><ul>
                        <li>Small private IT projects</li>
                        <li>Climbing</li>
                        <li>Hiking</li>
                        <li>Water sports</li>
                        <li>Diving</li>
                      </ul></Typography>
                  </Paper>
            </Grid>
            <Grid item xs={12} md={7}>
              <Paper elevation={4} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>Hello, it's me César</Typography>
                <Typography variant="body1" gutterBottom>
                How did I begin my tech journey?<br/>
                </Typography>
                <Typography variant="body2">From a young age, I have been fascinated by the world of IT. 
                My experience as a working student at a renowned pharmaceutical company enhanced my 
                understanding of modern technologies and process optimization, deepening my interest 
                in the field. During my studies in Business Informatics, where I focused on programming 
                modules, I actively engaged in practical projects with companies as clients, eagerly 
                taking on responsibilities and applying theoretical knowledge in real-world settings.<br />
                  <br /></Typography>
                  <Typography variant="body1" gutterBottom>
                  What key skills have I developed?<br/>
                </Typography>
                <Typography variant="body2">This role allowed me to gain valuable experience and expand 
                my understanding of various programming languages through script writing. It also 
                deepened my interest in IT as I worked at the intersection of business and technology. 
                During my civil service in IT support, I acquired comprehensive knowledge about diverse 
                systems and their interactions, further solidifying my technical foundation. This 
                experience was particularly enriching during a ransomware attack, which provided 
                significant insights into how systems can interact and work together under crisis 
                scenarios.<br/>
                  <br /></Typography>
                  <Typography variant="body1" gutterBottom>
                  What motivates my continuous learning?<br/>
                </Typography>
                <Typography variant="body2">I regularly engage in private projects to explore new 
                technologies and consolidate my existing knowledge, like creating this webpage 
                using AWS to understand its functionalities in practice. I always strive to extend 
                my expertise by reading technical books, particularly on topics such as Design Patterns.
                 My journey in software development is not just about acquiring knowledge; it's about 
                 applying what I learn to solve real-world problems. I am constantly seeking 
                 opportunities to grow professionally and take on responsibilities in specific areas of 
                 expertise.<br/><br/></Typography>
                 <Typography variant="body1" gutterBottom>
                 What are my career goals?<br/>
                </Typography>
                 <Typography variant="body2">I am eager to work in dynamic environments that drive 
                 innovation, bringing my technical skills, creativity, and team collaboration 
                 abilities to make a substantial impact. I look forward to contributing to meaningful 
                 projects that propel innovation and make a difference. Let's embark on this journey 
                 together and explore how we can create innovative solutions that shape the 
                 future.</Typography>
              </Paper>
                  <Paper elevation={4} sx={{  p: 2, mb: 2 }}>
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
                      </ul></Typography>
                      <Link variant="body2" href={practicalProjectURL} target="_blank" sx={{zIndex: 2,}}>
                      More details...
                      </Link><br/><br/>
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
                      <Link variant="body2" href={bachelorProjectURL} target="_blank" sx={{zIndex: 2,}}>
                      More details...
                      </Link> 
                  </Paper>
                <Grid item xs={12} md={4}>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}
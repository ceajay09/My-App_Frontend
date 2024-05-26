import * as React from 'react';
import { Container, Grid, Paper, Box, Typography, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Imprint() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
          Imprint
        </Typography>
        <Accordion sx={{ p: 0, mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="subtitle1" gutterBottom sx={{ textDecoration: 'underline' }}>
              Purpose of the Website
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
              This website is designed to offer insights into the construction of the site itself and to introduce you to who I am.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ p: 0, mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="subtitle1" gutterBottom sx={{ textDecoration: 'underline' }}>
              Contact Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={2} lg={1}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                    Owner:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9} md={10} lg={11}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                    César Jaquiéry
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2} lg={1}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                    Email:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9} md={10} lg={11}>
                  <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                    c.jaquiery@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </AccordionDetails>
        </Accordion>        <Accordion sx={{ p: 0, mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="subtitle1" gutterBottom sx={{ textDecoration: 'underline' }}>
              Disclaimer
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
              Information on this website is reviewed regularly but cannot guarantee its completeness, accuracy, or currentness.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Layout >
  );
}

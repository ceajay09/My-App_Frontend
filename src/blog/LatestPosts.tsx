// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';
// import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './Main';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import Layout from './Layout';

import * as React from 'react';
import { Container, Grid, Paper, Box, Typography, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';

const theme = createTheme();

export default function LatestPosts() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
        LatestPosts
        </Typography>

        <Box sx={{ my: 4 }}>
          <Paper elevation={4} sx={{ p: 2, border: '2px solid', bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline' }}>
              Purpose of the Website
            </Typography>
            <Typography variant="subtitle1" paragraph sx={{ fontStyle: 'italic' }}>
              This blog is dedicated to providing tips and advice for job applications.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ my: 4 }}>
          <Paper elevation={4} sx={{ p: 2, border: '2px solid', bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline' }}>
              Contact Information
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={1}>
                <Typography variant="subtitle1" paragraph sx={{ fontStyle: 'italic' }}>
                  Owner:
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Typography variant="subtitle1" paragraph sx={{ fontStyle: 'italic' }}>
                  César Jaquiéry
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1" paragraph sx={{ fontStyle: 'italic' }}>
                  Email:
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Typography variant="subtitle1" paragraph sx={{ fontStyle: 'italic' }}>
                  c.jaquiery@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Box sx={{ my: 4 }}>
            <Paper elevation={4} sx={{ p: 2, border: '2px solid', bgcolor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline' }}>
                Disclaimer
              </Typography>
                  <Typography variant="subtitle1" paragraph sx={{ fontStyle: 'italic' }}>
                  Information on this website is reviewed regularly but cannot guarantee its completeness, accuracy, or currentness.
                  </Typography>
            </Paper>
          </Box>
      </Box>
    </Container>
    </Layout >
  );
}



// export default function Imprint() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Layout>
//         <Container maxWidth="lg">
//           <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
//             Impressum
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Paper elevation={1} sx={{ padding: 2 }}>
//                 <Typography variant="h6" gutterBottom>
//                   Firmeninformationen
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                   <strong>Firmenname:</strong> Musterfirma AG
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                   <strong>Adresse:</strong>  Musterweg 1, 8000 Zürich, Schweiz
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                 <strong>Kontakt:</strong> info@musterfirma.ch | +41 44 123 45 67
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                 <strong>Handelsregister:</strong> Kanton Zürich, Handelsregisternummer: CHE-123.456.789
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12}>
//               <Paper elevation={1} sx={{ padding: 2 }}>
//                 <Typography variant="h6" gutterBottom>
//                   Rechtliche Hinweise
//                 </Typography>
//                 <Typography variant="subtitle1" paragraph>
//                 <strong>Verantwortlich für den Inhalt:</strong> Max Muster
//                 </Typography>
//                 <Typography variant="subtitle1" paragraph>
//                 <strong>Urheberrechtshinweise:</strong> Alle Inhalte und Werke auf dieser Webseite unterliegen dem schweizerischen Urheberrecht.
//                 </Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Layout>
//     </ThemeProvider>
//   );
// }

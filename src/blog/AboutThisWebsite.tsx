import * as React from 'react';
import { Container, Grid, Paper, Typography, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './Layout';

const theme = createTheme();

export default function AboutThisWebsite() {
  return (
    <Layout>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" style={{ marginBottom: '15px' }}>
          <Typography variant="h3" align="center" paddingTop={2} gutterBottom>
            About This Website
          </Typography>
          <Paper elevation={6} sx={{ p: 4, margin: 'auto', maxWidth: 936 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" paragraph>
              This personal webpage serves as a platform to introduce myself and provide a detailed overview
               of the technologies and methodologies used in its development. It reflects my technical prowess
                in web development, illustrating a proficient use of various tools from front to back end. For 
                additional details, please see the GitHub account linked in the footer.
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              Technologies and Tools Used
            </Typography>
            <Typography variant="h6" gutterBottom>
              Version Control and CI/CD
            </Typography>
            <Typography variant="body1" paragraph>
              Git with GitHub is used for version control, allowing effective management and tracking of codebase
               changes. A CI/CD pipeline is set up to link the GitHub repository directly to AWS. This setup 
               automates the deployment process, where new code commits to the main branch trigger automatic 
               Docker image creation and updates are pushed to the AWS repository.
            </Typography>
            <Typography variant="h6" gutterBottom>
              AWS Infrastructure
            </Typography>
            <Typography variant="body1" paragraph>
              The deployment architecture on AWS consists of two EC2 instances with load balancing to optimize 
              load distribution and enhance availability. An HTTPS certificate on AWS ensures that all data 
              transferred between the user and the server is securely encrypted.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Frontend Development
            </Typography>
            <Typography variant="body1" paragraph>
              The frontend uses Material UI templates for a modern aesthetic and is developed in TypeScript for 
              its enhanced safety features. It is hosted on an Nginx server, chosen for its performance and 
              reliability.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Backend Development
            </Typography>
            <Typography variant="body1" paragraph>
              The backend is contained within Docker environments, promoting consistency across development and 
              production setups. It is developed using Spring Boot and integrated with MongoDB for database 
              management, secured with Spring Security.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Docker and Containerization
            </Typography>
            <Typography variant="body1" paragraph>
              Docker Compose manages the multi-container Docker applications:
                    <Typography variant="body1">
                      <ul>
                        <li><strong>Backend Service:</strong> This service is based on Spring Boot, configured with necessary 
                          environment variables for database connections, and logs directed to AWS CloudWatch 
                          for monitoring.</li><br />
                        <li><strong>Frontend Service:</strong> This service handles the React-based frontend, running on Nginx, 
                          with logs also managed via AWS CloudWatch.</li><br />
                        <li><strong>Traefik as a Reverse Proxy:</strong> It directs network traffic to the appropriate backend 
                          or frontend service and is configured for HTTP traffic management only.</li>
                      </ul></Typography>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Continuous Monitoring and Load Balancing
            </Typography>
            <Typography variant="body1" paragraph>
            AWS and Traefik ensure smooth traffic management and SSL/TLS configurations, with Traefik directing HTTP traffic 
            and AWS handling HTTPS security. This strategic setup helps distribute user load and manage traffic spikes 
            efficiently across servers.
            </Typography>
            <Typography variant="h4" gutterBottom>
              Repository and Code Structure
            </Typography>
            <Typography variant="body1" paragraph>
            The well-organized codebase is designed to clarify functionality and enhance maintainability:
            <Typography variant="body1">
                      <ul>
                        <li><strong>Config:</strong> Settings for security and operational behaviors are defined here.</li>
                        <li><strong>Controllers:</strong> These handle the logic for HTTP request and response operations.</li>
                        <li><strong>Services: </strong> Business logic for functionalities such as user account management and blog 
                        operations is located here.</li>
                        <li><strong>Repositories: </strong> These interact with MongoDB to manage data operations.</li>
                        <li><strong>Models:</strong> Data structures within the application are defined in this section.</li>
                      </ul></Typography>
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              Summary
            </Typography>
            <Typography variant="body1" paragraph>
              Designed for robustness, security, and responsiveness, this webpage leverages state-of-the-art 
              technology and best practices in software development. It embodies my capability as a software 
              developer, prepared to address professional challenges in the technology sector.
            </Typography>
          </Paper>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Imprint from './Imprint';
import { Link as RouterLink } from 'react-router-dom';
import Layout from './Layout';

const sections = [
  { title: 'About Me', url: '#' },
  { title: 'About This Website', url: '#' },
  { title: 'Tech Insights', url: '#' },
  { title: 'Latest Posts', url: '#' },
  { title: 'Contact Me', url: '#' },
  { title: 'Imprint', url: '/imprint' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently ",
  image: `${process.env.PUBLIC_URL}/assets/Screenshot-CV-2.png`,
  imageText: 'main image description',
  linkText: 'See full CV...',
};

const featuredPosts = [
  {
    title: 'My New Website Is Live Now!',
    date: 'Apr 9',
    description:
      "I’m excited to launch my new website! Here, I'll share my coding journey, insights on tech innovations, and more. Let’s explore together.",
    image: 'https://source.unsplash.com/random?wallpapers', //TODO: Change image in Screenshot from landing page
    imageLabel: 'Image Text',
    url: '/aboutThisWebsite',
  },
  {
    title: "Get in Touch: Let's Connect!",
    date: 'Apr 9',
    description:
      "Newly graduated and passionate about Java, eager for projects and skill growth. Ready to innovate with your team. Let's connect!",
    image: 'https://source.unsplash.com/random?wallpapers', //TODO: New Image
    imageLabel: 'Image Text',
    url: '/contactMe',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Who I Am',
  description:
    "28-year-old Business Information FH graduate, deeply fascinated by technology. Always learning, eager to take responsibility and push the boundaries of what's possible.",
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/ceajay09/Webclient.git' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com/in/cesar-jaquiéry-9215aa179' }
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <Layout>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="Latest blog posts" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </Layout >

  );
}

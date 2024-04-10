import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import { useEffect, useState } from 'react';
import { error } from 'console';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Imprint from './Imprint'; // Stellen Sie sicher, dass der Pfad korrekt ist

<Router>
  <Routes>
  <Route path="/imprint" element={<Imprint />} />
    // Weitere Routen...
  </Routes>
</Router>

// const blogId = "660c2bbdccec7149d2c40ee7"

interface Post {
  id: string; // Annahme einer ID für jeden Post
  title: string;
  // content: string; // oder jede andere Struktur, die deine Posts haben
}

interface MainProps {
  posts: ReadonlyArray<Post>;
  title: string;
}

export default function Main(props: MainProps) {
  // const { posts, title } = props;
  const { title } = props;
  const [posts, setPosts] = useState<Post[]>([]); // Initialer Zustand ist ein leeres Array



  useEffect(() => {
    // fetch('http://localhost:8080/api/blog/' + blogId)
    fetch('http://localhost:8080/api/getBlogs')
    .then((response) => response.json())
    .then((data) => {
      setPosts(data)
      console.log("Succesfully retrieved blogs" + data);
    })
    .catch((error) => {
      console.error("Error fetching posts: ", error);
    });
    
  }, []) // Leeres Array, um den Effekt nur beim ersten Rendering auszuführen


  return (
    <Grid
      item
      xs={12}
      md={8}
      // sx={{
      //   '& .markdown': {
      //     py: 3,
      //   },
      // }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        // <Markdown className="markdown" key={post.substring(0, 40)}>
        <Markdown className="markdown" key={post.id}>
          {post.title}
        </Markdown>
      ))}
    </Grid>
  );
}
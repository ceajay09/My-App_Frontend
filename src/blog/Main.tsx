import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import { useEffect, useState } from 'react';
import { error } from 'console';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Imprint from './Imprint'; 

<Router>
  <Routes>
  <Route path="/imprint" element={<Imprint />} />
    // Weitere Routen...
  </Routes>
</Router>

interface Post {
  id: string; 
  title: string;
}

interface MainProps {
  posts: ReadonlyArray<Post>;
  title: string;
}

export default function Main(props: MainProps) {
  const { title } = props;
  const [posts, setPosts] = useState<Post[]>([]); 



  useEffect(() => {
    fetch('http://localhost:8080/api/getBlogs')
    .then((response) => response.json())
    .then((data) => {
      setPosts(data)
      console.log("Succesfully retrieved blogs" + data);
    })
    .catch((error) => {
      console.error("Error fetching posts: ", error);
    });
    
  }, []) 


  return (
    <Grid
      item
      xs={12}
      md={8}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className="markdown" key={post.id}>
          {post.title}
        </Markdown>
      ))}
    </Grid>
  );
}
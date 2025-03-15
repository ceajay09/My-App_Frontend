import React, { useState } from 'react';
import { Login } from "./authenticated/Login";
import { Register } from "./authenticated/Register";
import { Dashboard } from "./authenticated/Dashboard";
import Blog from './blog/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Imprint from './blog/Imprint';
import AboutMe from './blog/AboutMe';
import AboutThisWebsite from './blog/AboutThisWebsite';
import TechInsights from './blog/TechInsights';
import LatestPosts from './blog/LatestPosts';
import ContactMe from './blog/ContactMe';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/aboutThisWebsite" element={<AboutThisWebsite />} />
          <Route path="/techInsights" element={<TechInsights />} />
          <Route path="/latestPosts" element={<LatestPosts />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


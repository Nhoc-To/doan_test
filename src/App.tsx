import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import SetupSession from './pages/SetupSession';
import LivePractice from './pages/LivePractice';
import UploadVideo from './pages/UploadVideo';
import Report from './pages/Report';
import Achievements from './pages/Achievements';
import Community from './pages/Community';
import CommunityWatch from './pages/CommunityWatch';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="community" element={<Community />} />
          <Route path="community/watch/:id" element={<CommunityWatch />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/setup" element={<SetupSession />} />
        <Route path="/practice" element={<LivePractice />} />
        <Route path="/report" element={<Report />} />
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

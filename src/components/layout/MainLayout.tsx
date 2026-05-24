import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, BookOpen, Settings, Users } from 'lucide-react';
import './MainLayout.css';

const MainLayout: React.FC = () => {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon"></div>
          <h2>TalkUP</h2>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            <span>Tổng quan</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FolderKanban size={20} />
            <span>Dự án</span>
          </NavLink>
          <NavLink to="/community" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Users size={20} />
            <span>Cộng đồng</span>
          </NavLink>
          <NavLink to="/achievements" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <BookOpen size={20} />
            <span>Thành tích</span>
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Settings size={20} />
            <span>Cài đặt</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">A</div>
            <div className="user-info">
              <p className="user-name">Admin</p>
              <p className="user-role">Học viên</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;

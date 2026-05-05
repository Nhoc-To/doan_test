import React, { useState } from 'react';
import { User, Palette, Globe, Save } from 'lucide-react';
import './Settings.css';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'appearance' | 'language'>('profile');

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Cài đặt Hệ thống</h1>
        <p className="text-muted">Quản lý hồ sơ cá nhân và tùy chỉnh trải nghiệm ứng dụng</p>
      </header>

      <div className="settings-layout">
        {/* Settings Sidebar */}
        <div className="settings-sidebar card">
          <ul className="settings-menu">
            <li 
              className={activeTab === 'profile' ? 'active' : ''} 
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} /> Hồ sơ cá nhân
            </li>
            <li 
              className={activeTab === 'appearance' ? 'active' : ''} 
              onClick={() => setActiveTab('appearance')}
            >
              <Palette size={18} /> Giao diện
            </li>
            <li 
              className={activeTab === 'language' ? 'active' : ''} 
              onClick={() => setActiveTab('language')}
            >
              <Globe size={18} /> Ngôn ngữ
            </li>
          </ul>
        </div>

        {/* Settings Content */}
        <div className="settings-content card animation-fade-in">
          {activeTab === 'profile' && (
            <div className="settings-pane">
              <h2>Hồ sơ cá nhân</h2>
              <div className="profile-edit-form mt-6">
                <div className="avatar-section mb-6">
                  <div className="user-avatar-xl">A</div>
                  <button className="btn-secondary">Thay đổi ảnh</button>
                </div>
                
                <div className="form-group mb-4">
                  <label>Họ và tên</label>
                  <input type="text" defaultValue="Admin User" />
                </div>
                <div className="form-group mb-4">
                  <label>Email</label>
                  <input type="email" defaultValue="admin@example.com" disabled />
                </div>
                <div className="form-group mb-4">
                  <label>Mục tiêu luyện tập chính</label>
                  <select defaultValue="academic">
                    <option value="academic">Bảo vệ đồ án / Học thuật</option>
                    <option value="interview">Phỏng vấn xin việc</option>
                    <option value="internal">Báo cáo nội bộ</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="settings-pane">
              <h2>Giao diện ứng dụng</h2>
              <p className="text-muted mt-1 mb-6">Tùy chỉnh giao diện theo sở thích của bạn.</p>
              
              <div className="theme-options">
                <div className="theme-card active">
                  <div className="theme-preview light">
                    <div className="fake-header"></div>
                    <div className="fake-body"></div>
                  </div>
                  <span>Sáng (Light)</span>
                </div>
                <div className="theme-card">
                  <div className="theme-preview dark">
                    <div className="fake-header"></div>
                    <div className="fake-body"></div>
                  </div>
                  <span>Tối (Dark)</span>
                </div>
                <div className="theme-card">
                  <div className="theme-preview auto">
                    <div className="fake-header"></div>
                    <div className="fake-body"></div>
                  </div>
                  <span>Tự động (Hệ thống)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'language' && (
            <div className="settings-pane">
              <h2>Ngôn ngữ</h2>
              <p className="text-muted mt-1 mb-6">Chọn ngôn ngữ hiển thị cho giao diện và AI Feedback.</p>
              
              <div className="form-group">
                <label>Ngôn ngữ hiển thị</label>
                <select defaultValue="vi">
                  <option value="vi">Tiếng Việt</option>
                  <option value="en">English (US)</option>
                </select>
              </div>
            </div>
          )}

          <div className="settings-footer mt-8">
            <button className="btn-primary flex items-center gap-2">
              <Save size={18} /> Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, MoreVertical, Calendar, Clock } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="projects-container">
      <header className="projects-header">
        <div className="header-title">
          <h1>Danh sách Dự án</h1>
          <p className="text-muted">Quản lý các bài tập thuyết trình của bạn</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Tìm kiếm dự án..." />
          </div>
          <button className="btn-primary flex items-center gap-2" onClick={() => setShowCreateModal(true)}>
            <Plus size={18} />
            <span>Tạo mới</span>
          </button>
        </div>
      </header>

      <div className="projects-grid">
        {/* Mock Project 1 */}
        <div className="project-card-full" onClick={() => navigate('/projects/1')} style={{ cursor: 'pointer' }}>
          <div className="project-thumb-large">
            <div className="status-badge success">Đã hoàn thành</div>
          </div>
          <div className="project-content">
            <div className="project-meta">
              <span className="flex items-center gap-2 text-muted"><Calendar size={14} /> 20/05/2026</span>
              <span className="flex items-center gap-2 text-muted"><Clock size={14} /> 15:30</span>
            </div>
            <h3>Bảo vệ đồ án tốt nghiệp</h3>
            <p className="text-muted">Môn học: Phát triển ứng dụng Web</p>
            
            <div className="project-footer">
              <div className="score-badge">
                <span className="score-value">4.8</span>/5
              </div>
              <button className="btn-icon"><MoreVertical size={18} /></button>
            </div>
          </div>
        </div>

        {/* Mock Project 2 */}
        <div className="project-card-full" onClick={() => navigate('/projects/2')} style={{ cursor: 'pointer' }}>
          <div className="project-thumb-large draft">
            <div className="status-badge warning">Đang thực hiện</div>
          </div>
          <div className="project-content">
            <div className="project-meta">
              <span className="flex items-center gap-2 text-muted"><Calendar size={14} /> Hôm nay</span>
            </div>
            <h3>Thuyết trình AI Tech 2026</h3>
            <p className="text-muted">Hội thảo khoa học</p>
            
            <div className="project-footer">
              <button className="btn-secondary">Tiếp tục tập</button>
              <button className="btn-icon"><MoreVertical size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tạo Dự án */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Tạo Dự án Mới</h2>
            <form className="create-form">
              <div className="form-group">
                <label>Tên dự án</label>
                <input type="text" placeholder="Nhập tên dự án..." />
              </div>
              <div className="form-group">
                <label>Mô tả / Chủ đề</label>
                <textarea
                  placeholder="Nhập mô tả ngắn gọn..."
                  rows={3}
                  onChange={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                ></textarea>
              </div>
              <div className="form-group mb-4">
                <label>Quyền riêng tư</label>
                <div className="privacy-options">
                  <label className="privacy-option-label">
                    <input type="radio" name="privacy" value="private" defaultChecked />
                    Riêng tư
                  </label>
                  <label className="privacy-option-label">
                    <input type="radio" name="privacy" value="public" />
                    Công khai lên Cộng đồng
                  </label>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-text" onClick={() => setShowCreateModal(false)}>Hủy</button>
                <div className="modal-actions-right">
                  <button type="button" className="btn-secondary" onClick={() => navigate('/upload')}>
                    Tải video lên
                  </button>
                  <button type="button" className="btn-primary" onClick={() => navigate('/setup')}>
                    Luyện tập trực tiếp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

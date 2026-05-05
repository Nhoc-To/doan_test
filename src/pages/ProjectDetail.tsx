import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Play, Upload, MoreHorizontal, Clock, Calendar, CheckCircle } from 'lucide-react';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="project-detail-container">
      <header className="detail-header">
        <div className="flex items-center gap-4">
          <button className="btn-icon" onClick={() => navigate('/projects')}><ChevronLeft /></button>
          <div>
            <div className="flex items-center gap-3">
              <h1>Bảo vệ đồ án tốt nghiệp</h1>
              <span className="status-badge success">Đã hoàn thành</span>
            </div>
            <p className="text-muted mt-1">Môn học: Phát triển ứng dụng Web</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-secondary flex items-center gap-2" onClick={() => navigate('/upload')}>
            <Upload size={18} />
            <span>Tải video lên</span>
          </button>
          <button className="btn-primary flex items-center gap-2" onClick={() => navigate('/setup')}>
            <Play size={18} fill="currentColor" />
            <span>Luyện tập ngay</span>
          </button>
        </div>
      </header>

      <div className="detail-content">
        <div className="main-col">
          <section className="card mb-6">
            <h2>Thông tin chung</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Chủ đề</span>
                <span className="info-value">Học thuật / Bảo vệ</span>
              </div>
              <div className="info-item">
                <span className="info-label">Mục tiêu khán giả</span>
                <span className="info-value">10 - 50 người (Hội đồng)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Ngày tạo</span>
                <span className="info-value">18/05/2026</span>
              </div>
              <div className="info-item">
                <span className="info-label">Thời lượng dự kiến</span>
                <span className="info-value">15 phút</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-md mb-2">Mô tả</h3>
              <p className="text-muted">Bảo vệ đồ án tốt nghiệp trước hội đồng. Cần tập trung vào tính logic, trình bày rành mạch phần công nghệ và demo sản phẩm. Chú ý tương tác bằng mắt với hội đồng.</p>
            </div>
          </section>

          <section className="card">
            <div className="flex justify-between items-center mb-4">
              <h2>Lịch sử phiên tập (Sessions)</h2>
              <button className="btn-text">Xem tất cả</button>
            </div>
            
            <div className="session-list">
              {/* Session 1 */}
              <div className="session-item" onClick={() => navigate('/report')}>
                <div className="session-thumb">
                  <Play size={24} className="text-white opacity-80" />
                </div>
                <div className="session-info">
                  <h4>Phiên tập 2 (Mới nhất)</h4>
                  <div className="session-meta">
                    <span className="flex items-center gap-1"><Calendar size={14} /> Hôm nay</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 14:30</span>
                  </div>
                </div>
                <div className="session-score">
                  <div className="score-value">78</div>
                  <span className="score-label">Điểm</span>
                </div>
                <button className="btn-icon"><MoreHorizontal size={18} /></button>
              </div>

              {/* Session 2 */}
              <div className="session-item" onClick={() => navigate('/report')}>
                <div className="session-thumb">
                  <Play size={24} className="text-white opacity-80" />
                </div>
                <div className="session-info">
                  <h4>Phiên tập 1</h4>
                  <div className="session-meta">
                    <span className="flex items-center gap-1"><Calendar size={14} /> Hôm qua</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 09:15</span>
                  </div>
                </div>
                <div className="session-score">
                  <div className="score-value warning">65</div>
                  <span className="score-label">Điểm</span>
                </div>
                <button className="btn-icon"><MoreHorizontal size={18} /></button>
              </div>
            </div>
          </section>
        </div>

        <div className="side-col">
          <div className="card">
            <h2>Tiến độ dự án</h2>
            <div className="progress-timeline mt-4">
              <div className="progress-step completed">
                <div className="step-icon"><CheckCircle size={16} /></div>
                <div className="step-content">
                  <h4>Khởi tạo dự án</h4>
                  <p>18/05/2026</p>
                </div>
              </div>
              <div className="progress-step completed">
                <div className="step-icon"><CheckCircle size={16} /></div>
                <div className="step-content">
                  <h4>Phiên tập đầu tiên</h4>
                  <p>Đạt 65 điểm</p>
                </div>
              </div>
              <div className="progress-step active">
                <div className="step-icon"><div className="dot"></div></div>
                <div className="step-content">
                  <h4>Cải thiện mục tiêu</h4>
                  <p>Cần đạt &gt; 80 điểm</p>
                </div>
              </div>
              <div className="progress-step">
                <div className="step-icon"></div>
                <div className="step-content">
                  <h4>Hoàn thành xuất sắc</h4>
                  <p>Chưa đạt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

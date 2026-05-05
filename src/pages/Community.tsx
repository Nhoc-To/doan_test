import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageSquare, Share2, PlayCircle, Trophy, Eye, Search } from 'lucide-react';
import './Community.css';

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'forum' | 'observe'>('forum');

  return (
    <div className="community-container">
      <header className="community-header">
        <h1>Cộng đồng AI Speech</h1>
        <p className="text-muted">Cùng chia sẻ kinh nghiệm và học hỏi lẫn nhau</p>
      </header>

      {/* Tabs Navigation & Search */}
      <div className="flex justify-between items-center mb-6">
        <div className="custom-tabs">
          <button
            className={`tab-btn ${activeTab === 'forum' ? 'active' : ''}`}
            onClick={() => setActiveTab('forum')}
          >
            <MessageSquare size={18} />
            Diễn đàn
          </button>
          <button
            className={`tab-btn ${activeTab === 'observe' ? 'active' : ''}`}
            onClick={() => setActiveTab('observe')}
          >
            <Eye size={18} />
            Quan sát thực hành
          </button>
        </div>

        <div className="search-bar" style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-color)', width: '300px' }}>
          <Search size={18} className="text-muted" />
          <input type="text" placeholder="Tìm kiếm bài viết, dự án..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', color: 'var(--text-main)', fontSize: '0.9rem' }} />
        </div>
      </div>

      {activeTab === 'forum' ? (
        <div className="community-layout animation-fade-in">
          <div className="feed-col">
            {/* Post Creation */}
            <div className="create-post card mb-6">
              <div className="flex gap-4">
                <div className="user-avatar-sm">A</div>
                <textarea placeholder="Bạn muốn chia sẻ kinh nghiệm gì hôm nay?" className="post-input"></textarea>
              </div>
              <div className="post-actions mt-4">
                <button className="btn-secondary flex items-center gap-2"><PlayCircle size={18} /> Đính kèm Video</button>
                <button className="btn-primary">Đăng bài</button>
              </div>
            </div>

            {/* Feed List */}
            <div className="feed-list">
              {/* Post 1 */}
              <div className="post-card card">
                <div className="post-header">
                  <div className="flex items-center gap-3">
                    <div className="user-avatar-sm" style={{ backgroundColor: '#10B981' }}>H</div>
                    <div>
                      <h4 className="post-author">Hoàng Nam</h4>
                      <span className="post-time text-muted">2 giờ trước</span>
                    </div>
                  </div>
                  <div className="badge-level">Lv. 15</div>
                </div>
                <div className="post-body">
                  <p>Hôm nay mình vừa thử chế độ "Khán giả khó tính" và thực sự bất ngờ với cách AI bắt lỗi biểu cảm. Mọi người nên thử để rèn luyện tâm lý nhé!</p>
                  <div className="post-video-placeholder mt-4">
                    <PlayCircle size={48} className="text-white opacity-80" />
                    <span className="text-white font-medium mt-2">Xem video (02:15)</span>
                  </div>
                </div>
                <div className="post-footer">
                  <button className="action-btn active"><Heart size={18} /> 124</button>
                  <button className="action-btn"><MessageSquare size={18} /> 12</button>
                  <button className="action-btn"><Share2 size={18} /> Chia sẻ</button>
                </div>
              </div>

              {/* Post 2 */}
              <div className="post-card card">
                <div className="post-header">
                  <div className="flex items-center gap-3">
                    <div className="user-avatar-sm" style={{ backgroundColor: '#3B82F6' }}>T</div>
                    <div>
                      <h4 className="post-author">Thu Hà</h4>
                      <span className="post-time text-muted">5 giờ trước</span>
                    </div>
                  </div>
                  <div className="badge-level">Lv. 12</div>
                </div>
                <div className="post-body">
                  <p>Cảm ơn hệ thống đã gợi ý cho mình cách điều chỉnh tốc độ nói. Bài bảo vệ sáng nay của mình đã nhận được lời khen từ hội đồng! 🎉</p>
                </div>
                <div className="post-footer">
                  <button className="action-btn"><Heart size={18} /> 89</button>
                  <button className="action-btn"><MessageSquare size={18} /> 5</button>
                  <button className="action-btn"><Share2 size={18} /> Chia sẻ</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-col">
            {/* Top Speakers */}
            <div className="card highlight-card">
              <h3 className="flex items-center gap-2 mb-4"><Trophy className="text-warning" /> Bảng Vàng Tuần Này</h3>
              <div className="top-speakers-list">
                <div className="speaker-item">
                  <span className="rank gold">1</span>
                  <div className="user-avatar-xs">H</div>
                  <span className="name">Hoàng Nam</span>
                  <span className="score">98đ</span>
                </div>
                <div className="speaker-item">
                  <span className="rank silver">2</span>
                  <div className="user-avatar-xs">M</div>
                  <span className="name">Minh Quân</span>
                  <span className="score">95đ</span>
                </div>
                <div className="speaker-item">
                  <span className="rank bronze">3</span>
                  <div className="user-avatar-xs">T</div>
                  <span className="name">Thu Hà</span>
                  <span className="score">92đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="observe-layout animation-fade-in">
          <p className="text-muted mb-4">Khám phá và học hỏi từ các bài thực hành thực tế của cộng đồng. Nhấn vào để xem chi tiết video và bảng phân tích.</p>
          <div className="projects-grid">
            {/* Observe Project 1 */}
            <div className="project-card-full" onClick={() => navigate('/community/watch/1')} style={{ cursor: 'pointer' }}>
              <div className="project-thumb-large" style={{ background: 'linear-gradient(45deg, #1e293b, #334155)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PlayCircle size={48} className="text-white opacity-80" />
                <div className="status-badge success" style={{ position: 'absolute', top: '10px', right: '10px' }}>92 Điểm</div>
              </div>
              <div className="project-info-large">
                <div className="flex justify-between items-start">
                  <div>
                    <h3>Bảo vệ Luận văn Thạc sĩ</h3>
                    <p className="text-muted text-sm mt-1">Đăng bởi: Hoàng Nam • Học thuật</p>
                  </div>
                </div>
                <div className="project-stats mt-4">
                  <span className="flex items-center gap-1 text-sm text-muted"><Eye size={14} /> 1.2k views</span>
                  <span className="flex items-center gap-1 text-sm text-muted"><MessageSquare size={14} /> 15 đánh giá</span>
                </div>
              </div>
            </div>

            {/* Observe Project 2 */}
            <div className="project-card-full" onClick={() => navigate('/community/watch/2')} style={{ cursor: 'pointer' }}>
              <div className="project-thumb-large" style={{ background: 'linear-gradient(45deg, #0f172a, #1e293b)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PlayCircle size={48} className="text-white opacity-80" />
                <div className="status-badge warning" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#f59e0b' }}>85 Điểm</div>
              </div>
              <div className="project-info-large">
                <div className="flex justify-between items-start">
                  <div>
                    <h3>Báo cáo chiến lược Q3</h3>
                    <p className="text-muted text-sm mt-1">Đăng bởi: Thu Hà • Nội bộ</p>
                  </div>
                </div>
                <div className="project-stats mt-4">
                  <span className="flex items-center gap-1 text-sm text-muted"><Eye size={14} /> 850 views</span>
                  <span className="flex items-center gap-1 text-sm text-muted"><MessageSquare size={14} /> 8 đánh giá</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;

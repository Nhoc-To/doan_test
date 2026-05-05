import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Star, MessageCircle, FileText, Share2, ThumbsUp } from 'lucide-react';
import './CommunityWatch.css';

const CommunityWatch: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="watch-container">
      <header className="watch-header">
        <button className="btn-icon" onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
        <div>
          <h1>Bảo vệ Luận văn Thạc sĩ</h1>
          <p className="text-muted">Tác giả: Hoàng Nam • Học thuật • Đăng 2 ngày trước</p>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="btn-secondary flex items-center gap-2"><Share2 size={16} /> Chia sẻ</button>
        </div>
      </header>

      <div className="watch-layout">
        {/* Main Column */}
        <div className="watch-main">
          {/* Video Player Mock */}
          <div className="video-player-container">
            <div className="video-placeholder">
              <PlayCircle size={64} className="text-white opacity-80" />
              <div className="video-controls">
                <div className="progress-bar-video">
                  <div className="progress-filled" style={{width: '35%'}}></div>
                </div>
                <div className="controls-row">
                  <span className="text-white text-sm">05:12 / 15:30</span>
                </div>
              </div>
            </div>
          </div>

          {/* Peer Reviews / Đánh giá của người xem */}
          <section className="card mt-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-primary" />
              <h2>Đánh giá từ cộng đồng (Peer Review)</h2>
            </div>
            
            {/* Review Form */}
            <div className="review-form mb-6">
              <div className="flex gap-4">
                <div className="user-avatar-sm">A</div>
                <div className="review-input-wrapper">
                  <div className="rating-select mb-2 flex gap-1">
                    <Star size={20} fill="#F59E0B" color="#F59E0B" className="cursor-pointer" />
                    <Star size={20} fill="#F59E0B" color="#F59E0B" className="cursor-pointer" />
                    <Star size={20} fill="#F59E0B" color="#F59E0B" className="cursor-pointer" />
                    <Star size={20} fill="#F59E0B" color="#F59E0B" className="cursor-pointer" />
                    <Star size={20} color="#CBD5E1" className="cursor-pointer" />
                  </div>
                  <textarea placeholder="Nhận xét của bạn về bài nói này..." className="post-input"></textarea>
                  <div className="flex justify-end mt-2">
                    <button className="btn-primary text-sm">Gửi đánh giá</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Review List */}
            <div className="review-list">
              <div className="review-item">
                <div className="flex items-center gap-3 mb-2">
                  <div className="user-avatar-sm" style={{backgroundColor: '#3B82F6'}}>T</div>
                  <div>
                    <h4 className="font-medium">Thu Hà</h4>
                    <div className="flex gap-1">
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                    </div>
                  </div>
                  <span className="text-xs text-muted ml-auto">1 ngày trước</span>
                </div>
                <p className="text-sm">Phong thái của bạn rất tuyệt! Nhưng ở phút 05:12 có vẻ hơi lặp từ một chút, bạn thử dùng từ đồng nghĩa xem sao.</p>
                <div className="flex items-center gap-4 mt-2">
                  <button className="action-btn text-xs"><ThumbsUp size={14} /> 5</button>
                  <button className="action-btn text-xs">Phản hồi</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Side Column */}
        <div className="watch-side">
          {/* AI Stats */}
          <div className="card mb-6">
            <h2 className="mb-4 text-md">Thống kê AI</h2>
            <div className="score-summary flex items-center justify-between mb-4">
              <span className="text-muted">Điểm tổng:</span>
              <span className="text-2xl font-bold text-primary">92</span>
            </div>
            <div className="mini-stats-list">
              <div className="mini-stat">
                <span>Giao tiếp bằng mắt</span>
                <div className="bar-bg"><div className="bar-fill" style={{width: '95%'}}></div></div>
              </div>
              <div className="mini-stat">
                <span>Tốc độ nói</span>
                <div className="bar-bg"><div className="bar-fill" style={{width: '85%'}}></div></div>
              </div>
              <div className="mini-stat">
                <span>Khung xương</span>
                <div className="bar-bg"><div className="bar-fill" style={{width: '90%'}}></div></div>
              </div>
            </div>
          </div>

          {/* Content Analysis */}
          <div className="card highlight-card">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-secondary" />
              <h2 className="text-md">Phân tích Nội dung</h2>
            </div>
            
            <div className="analysis-item mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-sm">Tính logic & Cấu trúc</span>
                <span className="text-success font-bold text-sm">Tốt</span>
              </div>
              <p className="text-xs text-muted">Có đầy đủ Mở bài (giới thiệu mục tiêu), Thân bài (các luận điểm rõ ràng) và Kết bài (tóm tắt).</p>
            </div>

            <div className="analysis-item">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-sm">Định dạng & Nhất quán</span>
                <span className="text-warning font-bold text-sm">Khá</span>
              </div>
              <p className="text-xs text-muted">Văn phong học thuật thống nhất 90%. Phát hiện lặp từ "thực tế là" (5 lần).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityWatch;

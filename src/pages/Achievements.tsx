import React from 'react';
import { Award, Star, Zap, Shield, Target, TrendingUp } from 'lucide-react';
import './Achievements.css';

const Achievements: React.FC = () => {
  return (
    <div className="achievements-container">
      <header className="achievements-header">
        <div>
          <h1>Thành tích & Cấp độ</h1>
          <p className="text-muted">Theo dõi sự tiến bộ của bạn qua từng bài thuyết trình</p>
        </div>
      </header>

      <div className="level-section card">
        <div className="level-info">
          <div className="level-badge">
            <Shield size={48} className="level-icon" />
            <span className="level-number">12</span>
          </div>
          <div className="level-text">
            <h2>Chuyên gia Thuyết trình (Level 12)</h2>
            <p className="text-muted">Còn 1,250 XP để thăng cấp tiếp theo</p>
          </div>
        </div>
        
        <div className="xp-bar-container">
          <div className="xp-bar">
            <div className="xp-progress" style={{ width: '65%' }}></div>
          </div>
          <div className="xp-labels">
            <span>8,750 XP</span>
            <span>10,000 XP</span>
          </div>
        </div>
      </div>

      <section className="badges-section">
        <h2>Huy hiệu của bạn</h2>
        <div className="badges-grid">
          {/* Badge 1 */}
          <div className="badge-card unlocked">
            <div className="badge-icon-wrapper gold">
              <Star size={32} />
            </div>
            <h3>Giao tiếp bằng mắt</h3>
            <p>Duy trì ánh mắt với khán giả trên 80% thời gian</p>
            <span className="badge-date">Mở khóa: 15/05/2026</span>
          </div>

          {/* Badge 2 */}
          <div className="badge-card unlocked">
            <div className="badge-icon-wrapper silver">
              <Zap size={32} />
            </div>
            <h3>Nhịp độ hoàn hảo</h3>
            <p>Tốc độ nói chuẩn 120-150 từ/phút trong suốt bài</p>
            <span className="badge-date">Mở khóa: 02/05/2026</span>
          </div>

          {/* Badge 3 */}
          <div className="badge-card unlocked">
            <div className="badge-icon-wrapper bronze">
              <Target size={32} />
            </div>
            <h3>Đứng vững như bàn thạch</h3>
            <p>Khung xương ổn định, không đung đưa quá mức</p>
            <span className="badge-date">Mở khóa: 20/04/2026</span>
          </div>

          {/* Badge 4 - Locked */}
          <div className="badge-card locked">
            <div className="badge-icon-wrapper">
              <Award size={32} />
            </div>
            <h3>Bậc thầy Sân khấu</h3>
            <p>Đạt 5 bài thuyết trình có tổng điểm trên 95</p>
            <div className="badge-progress">
              <div className="progress-bar"><div className="fill" style={{width: '60%'}}></div></div>
              <span>3/5</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-overview">
        <h2>Thống kê chi tiết</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon"><TrendingUp size={24} /></div>
            <div className="stat-info">
              <h4>Kỹ năng cải thiện nhất</h4>
              <p>Khung xương (+15%)</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon"><Target size={24} /></div>
            <div className="stat-info">
              <h4>Mục tiêu tiếp theo</h4>
              <p>Cải thiện ngữ điệu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;

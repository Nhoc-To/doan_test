import React from 'react';
import { TrendingUp, Target, MessageCircle, Star } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Home.css';

const scoreData = [
  { name: 'T1', score: 65 },
  { name: 'T2', score: 72 },
  { name: 'T3', score: 78 },
  { name: 'T4', score: 85 },
  { name: 'T5', score: 82 },
  { name: 'T6', score: 91 },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Chào buổi sáng, Admin! 👋</h1>
        <p className="text-muted">Tuyệt vời! Kỹ năng của bạn đang có xu hướng tăng trưởng tốt.</p>
      </header>

      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-value">12</div>
          <div className="stat-label">Dự án đã hoàn thành</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4.8<span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>/5</span></div>
          <div className="stat-label">Điểm trung bình</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">32h</div>
          <div className="stat-label">Thời gian luyện tập</div>
        </div>
      </section>

      <div className="overview-content">
        <div className="main-col">
          {/* Chart Section */}
          <section className="card mb-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-primary" />
              <h2>Tiến độ phát triển kỹ năng</h2>
            </div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <CartesianGrid stroke="#e2e8f0" strokeDasharray="5 5" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748B" />
                  <YAxis stroke="#64748B" domain={[50, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Public Projects & Peer Reviews */}
          <section className="recent-projects mt-6">
            <h2>Các dự án đã công khai & Đánh giá</h2>
            <div className="public-projects-list flex flex-col gap-4 mt-4">
              <div className="public-project-item card" style={{ padding: '1rem' }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-md font-bold">Bảo vệ đồ án tốt nghiệp</h3>
                    <p className="text-xs text-muted">Công khai: 2 ngày trước • Học thuật</p>
                  </div>
                  <span className="badge" style={{ backgroundColor: '#ecfdf5', color: '#10b981' }}>92 Điểm</span>
                </div>
                
                <div className="peer-reviews" style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}>
                  <h4 className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1" style={{ color: '#64748b' }}><MessageCircle size={14}/> Đánh giá từ người xem (2)</h4>
                  <div className="flex gap-2 items-start mb-2">
                    <div className="user-avatar-xs" style={{ width: 24, height: 24, fontSize: '0.7rem', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>T</div>
                    <div>
                      <p className="text-xs font-medium m-0">Thu Hà <span style={{ color: '#F59E0B' }}>★★★★★</span></p>
                      <p className="text-xs text-muted m-0 mt-1">Phong thái rất tuyệt, nhưng lặp từ hơi nhiều ở giữa bài nhé!</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="user-avatar-xs" style={{ width: 24, height: 24, fontSize: '0.7rem', backgroundColor: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>M</div>
                    <div>
                      <p className="text-xs font-medium m-0">Minh Quân <span style={{ color: '#F59E0B' }}>★★★★☆</span></p>
                      <p className="text-xs text-muted m-0 mt-1">Mở bài ấn tượng, nội dung logic rõ ràng.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="public-project-item card" style={{ padding: '1rem' }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-md font-bold">Báo cáo chiến lược Q3</h3>
                    <p className="text-xs text-muted">Công khai: 1 tuần trước • Nội bộ</p>
                  </div>
                  <span className="badge" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>85 Điểm</span>
                </div>
                
                <div className="peer-reviews" style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}>
                  <h4 className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1" style={{ color: '#64748b' }}><MessageCircle size={14}/> Đánh giá từ người xem (1)</h4>
                  <div className="flex gap-2 items-start">
                    <div className="user-avatar-xs" style={{ width: 24, height: 24, fontSize: '0.7rem', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>H</div>
                    <div>
                      <p className="text-xs font-medium m-0">Hoàng Nam <span style={{ color: '#F59E0B' }}>★★★★★</span></p>
                      <p className="text-xs text-muted m-0 mt-1">Cấu trúc báo cáo rất mạch lạc. Học hỏi được nhiều!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="side-col">
          {/* Personal Strengths */}
          <section className="card mb-6 highlight-card">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-secondary" />
              <h2>Điểm mạnh cá nhân</h2>
            </div>
            <ul className="strengths-list">
              <li>
                <Star size={16} fill="#F59E0B" className="text-warning" />
                <span><strong>Ngữ điệu tự nhiên:</strong> Bạn luôn giữ được âm lượng ổn định và có điểm nhấn tốt.</span>
              </li>
              <li>
                <Star size={16} fill="#F59E0B" className="text-warning" />
                <span><strong>Tư thế vững vàng:</strong> Khung xương rất ổn định, ít có các cử chỉ thừa thãi.</span>
              </li>
            </ul>
          </section>

          {/* Audience Feedback */}
          <section className="card">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-primary" />
              <h2>Đánh giá từ khán giả ảo</h2>
            </div>
            <div className="feedback-list">
              <div className="feedback-item">
                <div className="feedback-avatar">😊</div>
                <div className="feedback-content">
                  <h4>Rất ấn tượng!</h4>
                  <p>"Bài thuyết trình rất rõ ràng và dễ hiểu. Diễn giả tự tin."</p>
                </div>
              </div>
              <div className="feedback-item">
                <div className="feedback-avatar">🧐</div>
                <div className="feedback-content">
                  <h4>Cần cải thiện ánh mắt</h4>
                  <p>"Đôi lúc bạn nhìn chằm chằm vào slide thay vì nhìn chúng tôi."</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;

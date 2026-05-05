import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Play, ChevronLeft, Target, ArrowRight, TrendingUp, AlertCircle, FileText, AlignLeft } from 'lucide-react';
import './Report.css';

const data = [
  { subject: 'Ngữ điệu', A: 85, fullMark: 100 },
  { subject: 'Tốc độ', A: 65, fullMark: 100 },
  { subject: 'Khung xương', A: 90, fullMark: 100 },
  { subject: 'Ánh mắt', A: 70, fullMark: 100 },
  { subject: 'Từ ngữ', A: 80, fullMark: 100 },
];

const Report: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="report-container">
      <header className="report-header">
        <div className="flex items-center gap-4">
          <button className="btn-icon" onClick={() => navigate('/projects')}><ChevronLeft /></button>
          <div>
            <h1>Báo cáo: Thuyết trình AI Tech 2026</h1>
            <p className="text-muted">Hoàn thành lúc 10:30 AM, Hôm nay</p>
          </div>
        </div>
        <div className="score-summary">
          <div className="score-circle">
            <span className="score-number">78</span>
            <span className="score-text">/100</span>
          </div>
          <div className="score-label">Khá Tốt</div>
        </div>
      </header>

      <div className="report-content">
        <div className="report-left">
          {/* Video Player & Smart Timeline */}
          <div className="video-section card">
            <div className="video-player">
              <div className="video-placeholder">
                <Play size={48} className="text-muted" />
              </div>
            </div>
            
            <div className="smart-timeline">
              <div className="timeline-controls">
                <button className="btn-icon"><Play size={16} /></button>
                <span className="time-display">01:24 / 05:30</span>
              </div>
              <div className="timeline-bar-container">
                <div className="timeline-bar">
                  <div className="timeline-progress" style={{ width: '25%' }}></div>
                  {/* Timeline Markers */}
                  <div className="marker error" style={{ left: '15%' }} title="Lỗi: Tốc độ nói quá nhanh"></div>
                  <div className="marker warning" style={{ left: '40%' }} title="Lỗi: Không nhìn camera"></div>
                  <div className="marker success" style={{ left: '75%' }} title="Tốt: Ngữ điệu xuất sắc"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Plan */}
          <div className="action-plan card">
            <h2>Kế hoạch cải thiện (Action Plan)</h2>
            <div className="action-list">
              <div className="action-item">
                <div className="action-icon warning"><AlertCircle size={20} /></div>
                <div className="action-text">
                  <h4>Cải thiện giao tiếp ánh mắt</h4>
                  <p>Bạn chỉ nhìn vào camera 45% thời gian. Hãy cố gắng duy trì ánh mắt với camera thay vì nhìn xuống màn hình.</p>
                </div>
                <button className="btn-text">Thực hành riêng lẻ <ArrowRight size={16} /></button>
              </div>
              
              <div className="action-item">
                <div className="action-icon warning"><TrendingUp size={20} /></div>
                <div className="action-text">
                  <h4>Kiểm soát tốc độ nói</h4>
                  <p>Phút 01:15 - 02:30 tốc độ lên đến 180 từ/phút. Cần nói chậm lại ở những đoạn nhấn mạnh.</p>
                </div>
                <button className="btn-text">Thực hành riêng lẻ <ArrowRight size={16} /></button>
              </div>
              
              <div className="action-item">
                <div className="action-icon success"><Target size={20} /></div>
                <div className="action-text">
                  <h4>Tiếp tục phát huy tư thế</h4>
                  <p>Tư thế đứng thẳng rất tốt, tay có cử chỉ minh họa tự nhiên.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transcript & Content Analysis */}
          <div className="content-analysis-section card mt-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-secondary" />
              <h2>Phân tích Nội dung (Tài liệu đính kèm)</h2>
            </div>
            
            <p className="text-sm text-muted mb-4">
              Tài liệu tham chiếu: <strong>slide_do_an.pptx</strong>
            </p>

            <div className="analysis-grid">
              <div className="analysis-item">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Độ bám sát Slide</span>
                  <span className="text-success font-bold">95%</span>
                </div>
                <p className="text-sm text-muted">Tuyệt vời. Bạn đã giải thích đầy đủ các luận điểm xuất hiện trong Slide 2 và Slide 3.</p>
              </div>

              <div className="analysis-item">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Giải thích Biểu đồ</span>
                  <span className="text-warning font-bold">Cần cải thiện</span>
                </div>
                <p className="text-sm text-muted">Phát hiện biểu đồ ở Slide 5 nhưng lời thoại chưa nhắc đến các số liệu chính.</p>
              </div>
            </div>

            <div className="transcript-box mt-4">
              <h3 className="flex items-center gap-2 mb-2 text-md"><AlignLeft size={16} /> Bản chép lời (Từ Microphone)</h3>
              <div className="transcript-content">
                <span className="text-muted">00:00</span> Xin chào hội đồng, em là Hoàng Nam. Hôm nay em xin trình bày về dự án AI Speech Coach. <br/><br/>
                <span className="text-muted">00:15</span> Mục tiêu chính của dự án là... à... xây dựng một hệ thống đánh giá thời gian thực. <span className="highlight-warning" title="Lặp từ">Thực tế là</span>, nhiều sinh viên rất yếu kỹ năng này. <br/><br/>
                <span className="text-muted">00:45</span> <span className="highlight-success" title="Câu nhấn mạnh tốt">Hệ thống của chúng em giải quyết được ba vấn đề cốt lõi:</span> thứ nhất là đánh giá khung xương, thứ hai là ánh mắt, và thứ ba là tốc độ nói. <br/><br/>
                <span className="text-muted">01:24</span> <span className="highlight-error" title="Tốc độ nói quá nhanh">Tiếp theo, em xin đi sâu vào phần kiến trúc kỹ thuật. Hệ thống sử dụng ReactJS và Vite ở frontend, kết hợp với các mô hình AI chạy qua WebRTC để đảm bảo độ trễ thấp nhất có thể.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="report-right">
          {/* Radar Chart */}
          <div className="chart-section card">
            <h2>Phân tích kỹ năng (5 Trục)</h2>
            <div className="radar-chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Kỹ năng" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="skills-breakdown">
              <div className="skill-item">
                <span>Khung xương (Pose)</span>
                <span className="skill-score success">90/100</span>
              </div>
              <div className="skill-item">
                <span>Ngữ điệu (Voice)</span>
                <span className="skill-score success">85/100</span>
              </div>
              <div className="skill-item">
                <span>Từ ngữ (Vocab)</span>
                <span className="skill-score success">80/100</span>
              </div>
              <div className="skill-item">
                <span>Ánh mắt (Gaze)</span>
                <span className="skill-score warning">70/100</span>
              </div>
              <div className="skill-item">
                <span>Tốc độ (Pace)</span>
                <span className="skill-score warning">65/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

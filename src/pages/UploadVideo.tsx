import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, FileVideo, CheckCircle2, X } from 'lucide-react';
import './UploadVideo.css';

const UploadVideo: React.FC = () => {
  const navigate = useNavigate();
  const [uploadState, setUploadState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [progress, setProgress] = useState(0);

  // Mock Upload Process
  useEffect(() => {
    if (uploadState === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploadState('success');
            return 100;
          }
          return prev + 5;
        });
      }, 300); // Tăng progress mỗi 300ms
      return () => clearInterval(interval);
    }
  }, [uploadState]);

  // Tự động chuyển qua report sau khi success
  useEffect(() => {
    if (uploadState === 'success') {
      const timer = setTimeout(() => {
        navigate('/report');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [uploadState, navigate]);

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUploadState('loading');
  };

  const handleFileSelect = () => {
    setUploadState('loading');
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <button className="btn-close" onClick={() => navigate(-1)}><X /></button>
        
        {uploadState === 'idle' && (
          <div className="upload-idle animation-fade-in">
            <h2>Tải lên Video Thuyết trình</h2>
            <p className="text-muted mb-6">Hỗ trợ MP4, MOV, AVI. Tối đa 500MB.</p>
            
            <div 
              className="drop-zone"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              onClick={handleFileSelect}
            >
              <div className="upload-icon-wrapper">
                <UploadCloud size={48} className="text-primary" />
              </div>
              <h3>Kéo thả file vào đây</h3>
              <p className="text-muted">hoặc nhấp để chọn file từ máy tính</p>
            </div>
          </div>
        )}

        {uploadState === 'loading' && (
          <div className="upload-loading animation-fade-in">
            <div className="processing-animation">
              <FileVideo size={64} className="pulse-icon text-secondary" />
              <div className="scan-line"></div>
            </div>
            <h2>AI Đang phân tích video...</h2>
            <p className="text-muted mb-4">Vui lòng không đóng cửa sổ này. Quá trình có thể mất vài phút.</p>
            
            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="progress-text">{progress}%</span>
            </div>
            <div className="analysis-steps">
              <div className={`step ${progress >= 20 ? 'done' : ''}`}>Trích xuất âm thanh</div>
              <div className={`step ${progress >= 50 ? 'done' : ''}`}>Theo dõi biểu cảm khuôn mặt</div>
              <div className={`step ${progress >= 80 ? 'done' : ''}`}>Đánh giá khung xương</div>
            </div>
          </div>
        )}

        {uploadState === 'success' && (
          <div className="upload-success animation-fade-in">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={64} className="text-primary" />
            </div>
            <h2>Phân tích thành công!</h2>
            <p className="text-muted">Đang chuyển hướng đến bảng kết quả...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadVideo;

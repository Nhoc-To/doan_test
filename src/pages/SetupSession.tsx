import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MonitorPlay, Camera, Settings2, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import './SetupSession.css';

const SetupSession: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [audienceCount, setAudienceCount] = useState<string>('10-50');
  const [audienceMode, setAudienceMode] = useState<string>('friendly');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Bind stream to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      if (stream) {
        videoRef.current.play().catch(e => console.log("Play interrupted: ", e));
      }
    }
  }, [stream]);

  // Start Camera
  useEffect(() => {
    let isActive = true;
    
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (!isActive) {
          mediaStream.getTracks().forEach(track => track.stop());
          return;
        }
        streamRef.current = mediaStream;
        setStream(mediaStream);
      } catch (err) {
        console.warn("Lỗi truy cập Camera/Mic đồng thời, đang thử lại chỉ dùng Camera...", err);
        try {
          const videoOnlyStream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (!isActive) {
            videoOnlyStream.getTracks().forEach(track => track.stop());
            return;
          }
          streamRef.current = videoOnlyStream;
          setStream(videoOnlyStream);
        } catch (err2) {
          console.error("Lỗi truy cập Camera hoàn toàn:", err2);
        }
      }
    };

    if (step === 3) {
      startCamera();
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
        setStream(null);
      }
    }
    
    return () => {
      isActive = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };
  }, [step]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/practice');
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate('/projects');
  };

  return (
    <div className="setup-container">
      <div className="setup-wizard">
        {/* Stepper Header */}
        <div className="stepper-header">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-circle">1</div>
            <span>Loại thuyết trình</span>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-circle">2</div>
            <span>Khán giả</span>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-circle">3</div>
            <span>Kiểm tra thiết bị</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="step-content">
          {step === 1 && (
            <div className="step-pane animation-fade-in">
              <h2>Chọn loại thuyết trình</h2>
              <p className="text-muted mb-6">Xác định mục tiêu để AI đưa ra đánh giá phù hợp nhất.</p>
              
              <div className="options-grid">
                <div className={`option-card ${selectedType === 'academic' ? 'selected' : ''}`} onClick={() => setSelectedType('academic')}>
                  <div className="option-icon"><MonitorPlay size={32} /></div>
                  <h3>Bảo vệ / Học thuật</h3>
                  <p>Trang trọng, chuyên môn cao</p>
                </div>
                <div className={`option-card ${selectedType === 'internal' ? 'selected' : ''}`} onClick={() => setSelectedType('internal')}>
                  <div className="option-icon"><Settings2 size={32} /></div>
                  <h3>Báo cáo nội bộ</h3>
                  <p>Thông tin rõ ràng, mạch lạc</p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-pane animation-fade-in">
              <h2>Thiết lập khán giả ảo</h2>
              <p className="text-muted mb-6">Tùy chỉnh đối tượng để tạo áp lực thực tế.</p>
              
              <div className="setup-form">
                <div className="form-group mb-4">
                  <label>Số lượng người nghe</label>
                  <select value={audienceCount} onChange={(e) => setAudienceCount(e.target.value)}>
                    <option value="1-10">1 - 10 người (Nhóm nhỏ)</option>
                    <option value="10-50">10 - 50 người (Phòng họp)</option>
                    <option value="50+">50+ người (Hội trường lớn)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Chế độ khán giả (Phản ứng AI)</label>
                  <div className="audience-modes">
                    <div className={`mode-card ${audienceMode === 'friendly' ? 'selected' : ''}`} onClick={() => setAudienceMode('friendly')}>
                      <div className="mode-emoji">😊</div>
                      <h4>Thân thiện</h4>
                      <p>Thường xuyên gật đầu, chăm chú nghe</p>
                    </div>
                    <div className={`mode-card ${audienceMode === 'strict' ? 'selected' : ''}`} onClick={() => setAudienceMode('strict')}>
                      <div className="mode-emoji">🧐</div>
                      <h4>Nghiêm khắc</h4>
                      <p>Khó tính, thỉnh thoảng nhíu mày</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-pane animation-fade-in">
              <h2>Kiểm tra thiết bị</h2>
              <p className="text-muted mb-6">Đảm bảo Camera và Microphone hoạt động tốt trước khi bắt đầu.</p>
              
              <div className="device-check-grid">
                <div className="video-preview-box" style={{ overflow: 'hidden', position: 'relative' }}>
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    muted 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
                  />
                  {!stream && (
                    <div className="preview-overlay">
                      <Camera size={48} className="text-muted mb-2" />
                      <span>Đang kết nối Camera...</span>
                    </div>
                  )}
                </div>
                
                <div className="check-list">
                  <div className="check-item success">
                    <CheckCircle2 className="check-icon" />
                    <div className="check-info">
                      <h4>Camera</h4>
                      <p>Đã nhận diện: FaceTime HD Camera</p>
                    </div>
                  </div>
                  <div className="check-item success">
                    <CheckCircle2 className="check-icon" />
                    <div className="check-info">
                      <h4>Microphone</h4>
                      <p>Đã nhận diện: MacBook Pro Microphone</p>
                    </div>
                  </div>
                  <div className="check-item warning">
                    <div className="status-dot warning"></div>
                    <div className="check-info">
                      <h4>Môi trường ánh sáng</h4>
                      <p>Hơi tối, AI có thể khó bắt biểu cảm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="wizard-footer">
          <button className="btn-text flex items-center gap-2" onClick={handleBack}>
            <ChevronLeft size={18} />
            <span>{step === 1 ? 'Hủy bỏ' : 'Quay lại'}</span>
          </button>
          
          <button 
            className="btn-primary flex items-center gap-2" 
            onClick={handleNext}
            disabled={step === 1 && !selectedType}
          >
            <span>{step === 3 ? 'Bắt đầu luyện tập' : 'Tiếp tục'}</span>
            {step < 3 && <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupSession;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Mic, Square, Circle, AlertTriangle, Eye, Activity, Maximize } from 'lucide-react';
import './LivePractice.css';

const LivePractice: React.FC = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [warnings, setWarnings] = useState<{id: number, text: string, type: string}[]>([]);
  
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

    startCamera();

    return () => {
      isActive = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  // Timer logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRecording) {
      interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Mockup Live Warnings
  useEffect(() => {
    if (!isRecording) return;
    
    const mockWarnings = [
      { id: 1, text: "Bạn đang nhìn lệch khỏi camera", type: "gaze" },
      { id: 2, text: "Tốc độ nói hơi nhanh", type: "pace" },
      { id: 3, text: "Hãy đứng thẳng lưng lên", type: "pose" }
    ];

    let count = 0;
    const interval = setInterval(() => {
      if (count < mockWarnings.length) {
        setWarnings(prev => [...prev, mockWarnings[count]]);
        setTimeout(() => {
          setWarnings(prev => prev.filter(w => w.id !== mockWarnings[count].id));
        }, 5000); // Hide warning after 5s
        count++;
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleFinish = () => {
    setIsRecording(false);
    navigate('/report'); // Navigate to Post-Session Report
  };

  return (
    <div className="live-practice-container">
      {/* Header */}
      <header className="practice-header">
        <div className="practice-info">
          <h2>Thuyết trình AI Tech 2026</h2>
          <span className="badge">Chế độ: Bảo vệ / Học thuật</span>
        </div>
        <div className={`recording-timer ${isRecording ? 'active' : ''}`}>
          <div className="recording-dot"></div>
          <span>{formatTime(timer)}</span>
        </div>
        <button className="btn-icon" onClick={() => navigate('/setup')}>
          Hủy bỏ
        </button>
      </header>

      {/* Main Camera Area */}
      <div className="camera-area">
        <div className="camera-viewport-container">
          <div className="camera-viewport">
            <div className="placeholder-person" style={{ backgroundColor: 'black', overflow: 'hidden' }}>
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
              />
              {!stream && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
                  <Camera size={64} style={{ color: '#94a3b8', marginBottom: '1rem' }} />
                  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>Đang kết nối Camera...</p>
                </div>
              )}
            </div>

            {/* AI HUD Overlay Mockups */}
            {isRecording && (
              <>
                <div className="hud-overlay pose-box">
                  <span>[Khung xương OK]</span>
                </div>
                <div className="hud-overlay gaze-box">
                  <Eye size={16} /> <span>Eye Tracking Active</span>
                </div>
                
                <div className="audio-waveform-container">
                  <div className="waveform-bar delay-1"></div>
                  <div className="waveform-bar delay-2"></div>
                  <div className="waveform-bar delay-3"></div>
                  <div className="waveform-bar delay-4"></div>
                  <div className="waveform-bar delay-2"></div>
                  <div className="waveform-bar delay-1"></div>
                </div>
              </>
            )}

            {/* Floating Badges for Live Warnings */}
            <div className="floating-warnings">
              {warnings.map(warning => (
                <div key={warning.id} className="warning-toast animation-slide-in">
                  <AlertTriangle size={18} className="warning-icon" />
                  <span>{warning.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Control Panel (Now sitting clean and responsive below the viewport) */}
          <div className="practice-controls">
            <div className="control-group">
              <button className="control-btn"><Mic size={20} /></button>
              <button className="control-btn"><Camera size={20} /></button>
            </div>

            <div className="main-action">
              {!isRecording ? (
                <button className="btn-record" onClick={() => setIsRecording(true)}>
                  <Circle size={16} fill="white" />
                  <span>Bắt đầu</span>
                </button>
              ) : (
                <button className="btn-stop" onClick={handleFinish}>
                  <Square size={16} fill="white" />
                  <span>Kết thúc</span>
                </button>
              )}
            </div>

            <div className="control-group right">
              <button className="control-btn"><Activity size={20} /></button>
              <button className="control-btn"><Maximize size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePractice;

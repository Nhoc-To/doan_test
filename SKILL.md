# SKILL: build-ai-speech-coach-prototype

## 1. Intent Layer (Mục tiêu & Phạm vi)
- **Purpose:** Chuyển đổi bảng đặc tả chức năng thô của hệ thống AI Speech Coach thành các luồng giao diện (UI/UX Flows) hoàn chỉnh và tạo prompt mã nguồn/prototype chất lượng cao.
- **Use When:** 
  - Cần tạo bản mẫu (prototype) tương tác cho ứng dụng AI huấn luyện thuyết trình.
  - Cần cung cấp đầu bài cho các công cụ AI Front-end (Antigravity, v0.dev, Bolt).
  - Cần kết nối logic giữa tính năng phân tích AI Core và trải nghiệm người dùng.

## 2. Knowledge Layer (Dữ liệu nền tảng hệ thống)
- **Domain Context:** Ứng dụng EdTech kết hợp AI Computer Vision & Audio Analysis.
- **System Features (Bắt buộc phải có):**
  - *Nhóm 1 (AI Core):* Pose Tracking (Khung xương), Gaze Detection (Ánh mắt), Heatmap (Bản đồ nhiệt), Pace Analytics (Nhịp độ).
  - *Nhóm 2 (Feedback):* Live Coaching (Cảnh báo Live), Radar Chart (Mạng nhện 5 trục), Smart Timeline (Dòng thời gian báo lỗi), Action Plan (3 gợi ý).
  - *Nhóm 3 (Management):* History (Lưu trữ), Progress Trend (Biểu đồ tiến độ), Academy (Thư viện Micro-learning), Challenge Mode (Thử thách đối chiếu diễn giả mẫu).
- **Design System:** Hiện đại, tối giản, mang tính giáo dục (sử dụng gam màu xanh lá cho điểm tốt, đỏ/cam cho điểm cần cải thiện).

## 3. Execution Layer (Cách thức thực thi)
- **Execution Approach (Quy trình 3 bước):**
  1. **Mapping (Bản đồ hóa):** Phân bổ 12 chức năng trên vào 3 màn hình cốt lõi: 
     - *Màn hình 1:* Live Practice (Quay video & Cảnh báo Live).
     - *Màn hình 2:* Post-Session Report (Phân tích kết quả, Radar Chart, Timeline).
     - *Màn hình 3:* Dashboard & Academy (Tiến độ & Học tập).
  2. **Componentizing (Lắp ghép UI):** Chọn thư viện biểu đồ phù hợp (Recharts cho Radar/Line chart). Gắn logic giả lập cho Camera và Video Player.
  3. **Prompting (Sinh mã):** Viết lệnh tạo UI một cách chi tiết để AI không bỏ sót bất kỳ chức năng nào.

## 4. Verification Layer (Kiểm chứng 4C - BẮT BUỘC)
Trước khi xuất bản Prototype Prompt, phải tự kiểm duyệt qua bộ lọc 4C:
- **[ ] Correctness:** Màn hình Live có đủ 4 tính năng Core AI (Pose, Gaze, Heatmap, Pace) không? Radar Chart có đủ 5 trục chưa?
- **[ ] Completeness:** Có thanh điều hướng (Navigation/Sidebar) để người dùng chuyển đổi qua lại giữa 3 màn hình chưa?
- **[ ] Context-fit:** Giao diện có phù hợp với trải nghiệm vừa đứng trước camera vừa theo dõi cảnh báo (không bị che khuất tầm nhìn) không?
- **[ ] Consequence:** Nếu AI (như Antigravity) sinh ra giao diện bị lỗi biểu đồ, đã có hướng dẫn (fallback) dùng Recharts hoặc mock data chưa?

## 5. Evolution Layer (Học từ lỗi & Nâng cấp)
- **Edge Cases (Tình huống rủi ro thực tế):**
  - *Lỗi sinh UI:* Các công cụ AI thường hay quên vẽ các điểm Xanh/Đỏ trên thanh Timeline của Video. -> **Giải pháp:** Phải nhấn mạnh "custom progress bar with distinct red/green markers" trong prompt.
  - *Chồng chéo UI:* Cảnh báo "Live Coaching" dễ che mất mặt người dùng trên camera. -> **Giải pháp:** Yêu cầu làm dạng "toast notification" ở góc hoặc "floating badges" mờ.


**[SYSTEM: ACTIVATE SKILL "build-ai-speech-coach-prototype"]**

**Context:**
I am building an EdTech "AI Speech Coach" SaaS prototype. Act as an expert React/Next.js Frontend Developer and UI/UX Designer. Create a functional, interactive, single-page application mockup.

**Technical Rules:**
-sceens in screens folder


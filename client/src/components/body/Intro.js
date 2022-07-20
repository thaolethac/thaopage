import React from "react";
import "../css/Intro.css";

const Intro = () => {
  return (
    <div>
      <div class="mb-3 under">
        <a href="/trang-chu">Trang chủ</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
        <span> Giới thiệu</span>
      </div>
      <div class="intro">
        <div class="right">
          <div className="text-header">Giới thiệu trung tâm</div>
          <ul>
            <li>Thành lập: năm 1995.</li>
            <li>
              Địa chỉ liên hệ: Số 201, đường Phong Định Cảng, phường Trường Thi,
              TP.Vinh, tỉnh Nghệ An.
            </li>
            <li>Điện thoại: 0238.3550 050.</li>
            <li>Fax: 0238.3833104.</li>
            <li>Giám đốc Trung tâm: Ông Trần Quốc Tuấn </li>
            <li>Phó Giám đốc Trung tâm: Ông Lê Hải Dương</li>
          </ul>

          <div class="img-park">
            <img
              src="https://file.asxh.org/uploads/10/Anh%20Trung%20t%C3%A2m.jpg"
              alt="Park"
              title="Park"
            />
          </div>
          <h4>NHIỆM VỤ, QUYỀN HẠN </h4>
          <p>
            Trung tâm Dịch vụ việc làm Nghệ An thuộc Sở Lao động - Thương binh
            và Xã hội tỉnh Nghệ An do UBND tỉnh Nghệ An quyết định đổi tên từ
            Trung tâm Giới thiệu việc làm, là đơn vị sự nghiệp có thu tự bảo đảm
            một phần chi phí hoạt động thường xuyên theo quy định hiện hành,
            hoạt động trên lĩnh vực xã hội, có tư cách pháp nhân, có con dấu và
            tài khoản riêng để hoạt động.
          </p>
          <h5>* Nhiệm vụ:</h5>
          <p> 1. Hoạt động tư vấn:</p>
          <ul>
            <li>
              Tư vấn học nghề cho người lao động về lựa chọn nghề, trình độ đào
              tạo, nơi học phù hợp với khả năng, nguyện vọng
            </li>
            <li>
              Tư vấn học nghề cho người lao động về lựa chọn nghề, trình độ đào
              tạo, nơi học phù hợp với khả năng, nguyện vọng.
            </li>
            <li>
              Tư vấn việc làm cho người lao động về lựa chọn công việc phù hợp
              với khả năng và nguyện vọng; về kỹ năng thi tuyển; về tự tạo việc
              làm, tìm việc làm trong nước và ngoài nước;
            </li>
            <li>
              Tư vấn cho người sử dụng lao động về tuyển dụng lao động; về quản
              trị và phát triển nguồn nhân lực; về sử dụng lao động và phát
              triển việc làm;
            </li>
            <li>
              Tư vấn về chính sách, pháp luật lao động cho người lao động, người
              sử dụng lao động.
            </li>
          </ul>
        </div>
        <div class="left">
          <div class="text-header">Quảng cáo</div>
          <div>
            <img src="https://carly.com.vn/media/1477/chay-quang-cao-facebook-1.jpg?width=605&height=513&mode=max" alt="Ads" style={{width : "100%", height : "100%", padding : "5px"}}/>
            <img src="https://aimacademy.vn/upload/images/blog/1932955.jpg" alt="Ads" style={{width : "100%", height : "100%", padding : "5px"}}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

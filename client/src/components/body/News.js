import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../css/News.css";
const News = () => {
  const Data = [
    {
      name: "NGÀY HỘI TUYỂN DỤNG LOTTE MART VINH NGÀY 07/05/2022",
      image: "https://file.asxh.org/uploads/10/bhtn12.jfif",
      des: "Để tạo điều kiện cho các Doanh nghiệp, Đơn vị, Cơ sở đào tạo nghề tuyển dụng lao động, tuyển sinh và Người lao động có cơ hội tìm kiếm việc làm và học nghề. Phiên giao dịch việc làm Nghệ An được tổ chức như sau:      ",
    },

    {
      name: "THÔNG BÁO TIẾP NHẬN HỒ SƠ QUA BƯU ĐIỆN VỚI NGƯỜI LAO ĐỘNG TẠI TP VINH",
      image: "https://file.asxh.org/uploads/10/fg.jpg",
      des: "Để tạo điều kiện cho người lao động đang hưởng BHTN có địa chỉ Tp Vinh, Trung tâm tiếp nhận hồ sơ giải quyết BHTN qua đường bưu điện      ",
    },

    {
      name: "NGÀY HỘI TUYỂN DỤNG LOTTE MART VINH NGÀY 07/05/2022",
      image: "https://file.asxh.org/uploads/10/bhtn12.jfif",
      des: "Để tạo điều kiện cho các Doanh nghiệp, Đơn vị, Cơ sở đào tạo nghề tuyển dụng lao động, tuyển sinh và Người lao động có cơ hội tìm kiếm việc làm và học nghề. Phiên giao dịch việc làm Nghệ An được tổ chức như sau:      ",
    },
    {
      name: "NGÀY HỘI TUYỂN DỤNG LOTTE MART VINH NGÀY 07/05/2022",
      image: "https://file.asxh.org/uploads/10/bhtn12.jfif",
      des: "Để tạo điều kiện cho các Doanh nghiệp, Đơn vị, Cơ sở đào tạo nghề tuyển dụng lao động, tuyển sinh và Người lao động có cơ hội tìm kiếm việc làm và học nghề. Phiên giao dịch việc làm Nghệ An được tổ chức như sau:      ",
    },
    {
      name: "NGÀY HỘI TUYỂN DỤNG LOTTE MART VINH NGÀY 07/05/2022",
      image: "https://file.asxh.org/uploads/10/bhtn12.jfif",
      des: "Để tạo điều kiện cho các Doanh nghiệp, Đơn vị, Cơ sở đào tạo nghề tuyển dụng lao động, tuyển sinh và Người lao động có cơ hội tìm kiếm việc làm và học nghề. Phiên giao dịch việc làm Nghệ An được tổ chức như sau:      ",
    },
    {
      name: "THÔNG BÁO TIẾP NHẬN HỒ SƠ QUA BƯU ĐIỆN VỚI NGƯỜI LAO ĐỘNG TẠI TP VINH",
      image: "https://file.asxh.org/uploads/10/fg.jpg",
      des: "Để tạo điều kiện cho người lao động đang hưởng BHTN có địa chỉ Tp Vinh, Trung tâm tiếp nhận hồ sơ giải quyết BHTN qua đường bưu điện      ",
    },

    {
      name: "THÔNG BÁO TIẾP NHẬN HỒ SƠ QUA BƯU ĐIỆN VỚI NGƯỜI LAO ĐỘNG TẠI TP VINH",
      image: "https://file.asxh.org/uploads/10/fg.jpg",
      des: "Để tạo điều kiện cho người lao động đang hưởng BHTN có địa chỉ Tp Vinh, Trung tâm tiếp nhận hồ sơ giải quyết BHTN qua đường bưu điện      ",
    },

    {
      name: "THÔNG BÁO TIẾP NHẬN HỒ SƠ QUA BƯU ĐIỆN VỚI NGƯỜI LAO ĐỘNG TẠI TP VINH",
      image: "https://file.asxh.org/uploads/10/fg.jpg",
      des: "Để tạo điều kiện cho người lao động đang hưởng BHTN có địa chỉ Tp Vinh, Trung tâm tiếp nhận hồ sơ giải quyết BHTN qua đường bưu điện      ",
    },

    {
      name: "THÔNG BÁO TIẾP NHẬN HỒ SƠ QUA BƯU ĐIỆN VỚI NGƯỜI LAO ĐỘNG TẠI TP VINH",
      image: "https://file.asxh.org/uploads/10/fg.jpg",
      des: "Để tạo điều kiện cho người lao động đang hưởng BHTN có địa chỉ Tp Vinh, Trung tâm tiếp nhận hồ sơ giải quyết BHTN qua đường bưu điện      ",
    },
  ];
  const Body = [
    {
      name: " THÔNG BÁO TỔ CHỨC PHIÊN GIAO DỊCH VIỆC LÀM NGÀY THỨ 2 HẰNG TUẦN ",
      des: " Để tạo điều kiện cho các Doanh nghiệp, Đơn vị, Cơ sở đào tạo nghề tuyển dụng lao động, tuyển sinh,... ",
      title: "Tin tức",
      image:
        "https://timviec365.com/pictures/images/tim-viec-lam-tai-nghe-an-12.jpg",
    },
    {
      name: " NGÀY HỘI TUYỂN DỤNG LOTTE MART VINH NGÀY 07/05/2022 ",
      des: " Để tạo điều kiện cho các Doanh nghiệp, Đơn vị, Cơ sở đào tạo nghề tuyển dụng lao động, tuyển sinh,... ",
      title: "Tuyển dụng - Tư vấn",
      image:
        "https://timviec365.vn/pictures/images_09_2020/viec-lam-tai-huyen-phu-cat-binh-dinh-5.jpg",
    },
  ];
  const Footer = [
    {
      name: " THÔNG BÁO: DANH SÁCH LAO ĐỘNG SẢN XUẤT CẢNH ĐI HÀN QUỐC CHƯƠNG TRÌNH EPS NGÀY ",
      des: " THÔNG BÁO: DANH SÁCH LAO ĐỘNG XUẤT CẢNH ĐI HÀN QUỐC CHƯƠNG TRÌNH EPS NGÀY 11/11/2021 ",
      title: "Việc làm ngoài nước - Đào tạo",
      image:
        "https://timviec365.vn/pictures/images_09_2020/viec-lam-tai-huyen-phu-luong-thai-nguyen%20(16).jpg",
    },
    {
      name: " Thông báo tiếp nhận hồ sơ qua bưu điện với người lao động tại Tp Vinh ",
      des: " Để tạo điều kiện cho người lao động đang hưởng BHTN có địa chỉ Tp Vinh, Trung tâm tiếp nhận hồ sơ.. ",
      title: "Bảo hiểm thất nghiệp",
      image:
        "https://timviec365.vn/pictures/images_02_2021/lai-xe-biet-tieng-trung.jpg",
    },
  ];
  return (
    <div className="Container-news">
      <div class="mb-3 under">
        <a href="/trang-chu">Trang chủ</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <span>Tin tức</span>
      </div>
      <div className="header-news">
        <div className="text-header">Tin tức nổi bật</div>
        <div className="container-header">
          <div className="header-news-in-left">
            <div className="div-img-news">
              <img
                src="https://nghean37.com.vn/wp-content/uploads/2017/10/tuyen-dung-nhanh-nghe-an.jpg"
                alt="Thao"
                className="img-news"
              />
            </div>
            <div className="title-news">
              <h3>
                THÔNG BÁO TỔ CHỨC PHIÊN GIAO DỊCH VIỆC LÀM NGÀY THỨ 2 HẰNG TUẦN
              </h3>
              <p>
                Để tạo điều kiện cho các Doanh nghiệp, Đơn vị, Cơ sở đào tạo
                nghề tuyển dụng lao động, tuyển sinh và Người lao động có cơ hội
                tìm kiếm việc làm và học nghề. Phiên giao dịch việc làm Nghệ An
                được tổ chức như sau:
                <br />
                Để tạo điều kiện cho người lao động đang hưởng BHTN có địa chỉ
                Tp Vinh, Trung tâm tiếp nhận hồ sơ giải quyết BHTN qua đường bưu
                điện
              </p>
            </div>
          </div>
          <div className="header-news-in-right">
            {Data.map((data, index) => (
              <div className="header-news-list" key={index}>
                <img src={data.image} alt="Thao" />
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Title className="cardtitle">{data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted b cardsub">
                      {data.des}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="body-container-news">
        {Body.map((body, index) => (
          <div className="body-news" key={index}>
            <div className="body-news-col">
              <div className="text-header">{body.title}</div>
              <div className="header-news-list body-news-img1" key={index}>
                <img src={body.image} alt="Thao" />
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Title className="cardtitle">{body.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted b cardsub">
                      {body.des}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted b cardsub">
                      <ul className="text-news">
                        <li>
                          {" "}
                          {body.des} <br />
                        </li>
                        <li>
                          {" "}
                          {body.des} <br />
                        </li>
                        <li>
                          {" "}
                          {body.des} <br />
                        </li>
                        <li>
                          {" "}
                          {body.des} <br />
                        </li>
                        <li>
                          {" "}
                          {body.des} <br />
                        </li>
                        <li>
                          {" "}
                          {body.des} <br />
                        </li>
                      </ul>
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-container-news">
        {Footer.map((footer, index) => (
          <div className="footer-news" key={index}>
            <div className="footer-news-col">
              <div className="text-header">{footer.title}</div>
              <div className="header-news-list footer-news-img1" key={index}>
                <img src={footer.image} alt="Thao" />
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Title className="cardtitle">{footer.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted b cardsub">
                      {footer.des}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
              <div className="">
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted b cardsub">
                      <ul className="text-news">
                        <li>
                          {" "}
                          {footer.des.toLowerCase()} <br />
                        </li>
                        <li>
                          {" "}
                          {footer.des.toLowerCase()} <br />
                        </li>
                        <li>
                          {" "}
                          {footer.des.toLowerCase()} <br />
                        </li>
                        <li>
                          {" "}
                          {footer.des.toLowerCase()} <br />
                        </li>
                        <li>
                          {" "}
                          {footer.des.toLowerCase()} <br />
                        </li>
                        <li>
                          {" "}
                          {footer.des.toLowerCase()} <br />
                        </li>
                      </ul>
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

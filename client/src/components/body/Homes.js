import React, { useEffect, useState } from "react";
import "../css/Homes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useStore,useSelector } from "react-redux";

import {
  Form,
  Button,
  Carousel,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
const Homes = () => {
  const today = new Date();
  // const [id, setId] = useState(null);
  // const [likes, setLikes] = useState("");

  const url =
    "https://file.asxh.org/uploads/767ea513-50a1-4e83-83cd-442db2a57c34/trung%20tam.jpg";
  const des = "Sàn giao dịch việc làm tại Nghệ An";
  const time = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  const Under = [
    {
      url: "https://data-gcdn.basecdn.net/sys1/fe/2b/32/35/79/093ead9e8bdaf5d6366e733c33de8df8/ca08efea38ef643a5185408bf2aecfbb_185556_QSWYETTWZN63J.jpg",
      title: "Thông báo kỳ thi và phối hợp tổ chức đăng ký ...",
    },
    {
      url: "https://i.imgur.com/lEPnrxi.png",
      title: "Công ty CP phát triển giáo dục quốc tế IEC...",
    },
    {
      url: "https://adminvieclam.ntt.edu.vn/Uploads/images/7pL51hb.png",
      title: "Kế hoạch tổ chức chương trình tư vấn, giới thiệu...",
    },
  ];
  const Next = [
    {
      title: "THÔNG BÁO TỔ CHỨC PHIÊN GIAO DỊCH VIỆC LÀM NGÀY THỨ 2 HẰNG...",
    },
    {
      title: "THÔNG BÁO KHAI GIẢNG LỚP ĐÀO TẠO TIẾNG HÀN QUỐC THÁNG ...",
    },
    {
      title:
        "Công ty TNHH Mê Đi Ca tuyển Nhân viên bán hàng trong Siêu thị Lotte",
    },
    {
      title: "Công ty CP Nhật Ngữ Hihari tuyển dụng Trưởng phòng Đào tạo",
    },
    {
      title: "THÔNG BÁO KHAI GIẢNG LỚP ĐÀO TẠO TIẾNG HÀN QUỐC THÁNG ...",
    },
    {
      title: "Công ty CP Nhật Ngữ Hihari tuyển dụng Trưởng phòng Đào tạo",
    },
  ];
  const datas = [
  
    {
      title:
        "Công ty Cổ phần Tập đoàn Hoa Sen - Tuyển Nhân viên kinh doanh bán hàng Khu vực Nghệ AnBệnh viện Quốc tế Vinh tuyển: Nhân viên kế toán",
      like: 0,
    },
    {
      title: "Đầu bếp",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },

    {
      title: "Thao",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    {
      title: "Nhân viên bán hàng",
      like: 0,
    },
    
  ];
  const nameData = [
    
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },
    {
      name: "Lê Thạc Thao",
      des: "Sinh viên năm nhất đại học",
      addres: "Thị xã Hoàng Mai, Nghệ An",
    },

    
  ];
  const users = useSelector(state => state.isLoggedIn)
  return (
    <div className="container-home">
      <div className="header-home">
        <div className="news-home">
          <h5 className="home-header">Tin tức</h5>
          <div className="news-container">
            <div className="news-containerleft">
              <div className="news-image">
                <Carousel
                  variant="dark"
                  controls="false"
                  pause="hover"
                  interval="3000"
                  className="home-carousel"
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-40"
                      src="https://upload.tanca.io/api/image/news/611bed788836a85d45745347?name=2021-08-18-001015-quan-ly-thoi-gian.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5 style={{ color: "red" }}>
                        Kế hoạch tổ chức chương trình tư vấn, giới thiệu việc
                        làm trong và ngoài nước tại Thị xã Hoàng Mai
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-40"
                      src="https://www.nhomkinhxingfadanang.com/wp-content/uploads/2021/08/31-1.jpg"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5 style={{ color: "red" }}>
                        Thông báo kì thi và phối hợp tổ chức kì thi tiếng Hàn
                        theo chương trình EPS 2022
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-40"
                      src="https://cpc.vn/portals/0/articleupload/c53c9752-bfa8-4e7a-9f32-ce39c1195021.png"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h5 style={{ color: "red" }}>
                        Công ty CP phát triển nền tảng giáo dục Việt Nam
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="under-news-image">
                {Under.map((under, index) => (
                  <div className="list-home-image">
                    <img
                      alt={index}
                      src={under.url}
                      style={{ width: "95%", height: "150px" }}
                    />
                    <h6>{under.title}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="news-containerright">
              <Card style={{ width: "auto", padding: "4px", margin: "2px" }}>
                <Card.Img
                  variant="top"
                  src="https://anhdepfree.com/wp-content/uploads/2021/04/anh-ky-nang-lam-viec-nhom-14696.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Thư mời : Lễ khai trương Trung tâm MRC Nghệ An, Kết hợp tổ
                    chức Phiên...
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  {Next.map((next, index) => (
                    <ListGroupItem key={index}>{next.title}</ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </div>
          </div>
        </div>
        <div className="search-home">
          <h5 className="home-header"> Tìm kiếm</h5>
          <div className="list-findpeople">
            <Form.Select aria-label="Default select example">
              <option> Quận/huyện</option>
              <option value="1">Nghệ An</option>
              <option value="2">Hà Nội</option>
              <option value="3">Đà Nẵng</option>
            </Form.Select>
          </div>

          <div className="list-findpeople">
            <Form.Select aria-label="Default select example">
              <option>Xã / phường</option>
              <option value="1">Quỳnh Vinh</option>
              <option value="2">Quỳnh Thiện</option>
              <option value="3">Quỳnh Lưu</option>
            </Form.Select>
          </div>
          <div className="list-findpeople">
            <Form.Select aria-label="Default select example">
              <option>Vị trí tuyển dụng</option>
              <option value="1">SALE</option>
              <option value="2">CEO</option>
              <option value="3">ENGINER</option>
            </Form.Select>
          </div>
          <div className="list-findpeople">
            <Button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#3ca4ab",
                border: "none",
                marginTop: "5px",
              }}
            >
              Tìm kiếm
            </Button>
          </div>
          <div
            style={{
              border: "1px solid #e0e0e0",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            <h5 style={{ color: "#3ca4ab" }}>Đăng tin tuyển dụng</h5>
            <h6 style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              Nhanh chóng tiếp cận hàng trăm ngàn công việc
            </h6>
          </div>
          <div
            style={{
              border: "1px solid #e0e0e0",
              marginTop: "5px",
              cursor: "pointer",
              backgroundColor: "#3ca4ab",
            }}
          >
            <h5 style={{ color: "#fff" }}>Nộp hồ sơ tìm việc</h5>
            <h6
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                color: "#fff",
              }}
            >
              Cách nhanh nhất để được mời phỏng vấn{" "}
            </h6>
          </div>
          <div></div>
          <div style={{ border: "1px solid #e0e0e0" }}>
            <h5
              style={{
                backgroundColor: "#3ca4ab",
                height: "40px",
                color: "#fff",
                paddingTop: "4px",
              }}
            >
              Hỗ trợ trực tuyến
            </h5>
            <div>
              <h5>Phòng tư vấn GT việc làm :</h5>
              <h5 style={{ color: "#3ca4ab", cursor: "pointer" }}>
              Tel:  0396865496
              </h5>
            </div>
            <div>
              <h5>Email hỗ trợ:</h5>
              <h5 style={{ color: "#3ca4ab", cursor: "pointer" }}>
                sanvieclamnghean@gmail.com
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="jobs-home">
          <div className="jobs-1 job">
            <h5 className="home-header">Việc làm mới nhất</h5>
            <div className="jobs-container">
            <marquee behavior = "scrolling" loop = "loop" direction = "down" scrollamount = "4" >

              {datas.map((data, index) => (
                <div className="jobs-container-body" key={index}>
                  <img src={url} alt="Thao" />
                  <Card style={{ border: "none" }}>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted b">
                        {des}
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                        Thời gian : {time}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              ))}
              </marquee>
            </div>
          </div>
          <div className="jobs-2 job">
            <h5 className="home-header">Người tìm việc</h5>
            <div className="jobs-container">
            <marquee behavior = "scrolling" loop = "loop" direction = "down" scrollamount = "3N">
            {nameData.map((data, index) => (
              <div className="jobs-container-body" key={index}>
              <Card style={{ border: "none" }} key={index}>
              <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted b">
              {data.des}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
              {data.addres}
              </Card.Subtitle>
              </Card.Body>
              </Card>
              </div>
              ))}
              </marquee>
            </div>
          </div>
          <div className="jobs-3 job">
          <div className="jobs-3-1">
          <h5 className="home-header">Thống kê truy cập</h5>
          <div className="list-job-3" style={{backgroundColor : "#ffebea"}}> 
                <h5>Đang truy cập</h5>
                <h5 style={{color : "red", fontWeight:"750"}}>102</h5>
          </div>
          <div className="list-job-3" style={{backgroundColor : "#ebf6f6"}}>
                <h5>Tổng số truy cập</h5>
                <h5 style={{color : "red", fontWeight:"750"}}>120.212.434</h5>
          </div>
          </div>
          <div className="jobs-3-2">
          <h5 className="home-header">Quảng cáo</h5>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homes;

import React, {  } from "react";
import "../css/Findpeople.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
// import { IconName } from "react-icons/ai";
// import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { PatchPlus } from "react-bootstrap-icons";

const Findpeople = () => {
  const today = new Date();
  const url =
    "http://vieclamnghean.vn/Content/assets/img/avatar-nguoi-tim-viec.png";
  const sex = "Nữ";
  const level = "Trên 5 năm";
  const time = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  const datas = [
    {
      name: "LU THI KIM CUONG",
      cty: "Lu Thi Kim Cuong",
      pro: "",
      salary: "",
      address: "Xã Châu Kim, Quế Phong, Nghệ An",
      nganh: "",
    },

    {
      name: "Mai Quynh",
      cty: "Nhân viên văn phòng biết tiếng Trung",
      pro: "",
      salary: "",
      address: "",
      nganh: "",
    },
    {
      name: "Lê Thị Thùy Linh",
      cty: "Nhân viên lưu trữ",
      pro: "",
      salary: "",
      address: "Xã Hưng Xuân, Hưng Nguyên, Nghệ An",
      nganh: "",
    },
    {
      name: "Quynh Le",
      cty: "Nhân viên Mua hàng",
      pro: "Đại học",
      salary: "15-20 triệu",
      address: "xã Thanh Liên, Thanh Chương, Nghệ An",
      nganh: "",
    },

    {
      name: "Nguyễn Thu Nga",
      cty: "Nhân viên văn phòng",
      pro: "",
      salary: "",
      address: "Xã Nghi Thạch, Nghi Lộc, Nghệ An",
      nganh: "",
    },
    {
      name: "Quynh Le",
      cty: "Nhân viên Mua hàng",
      pro: "Đại học",
      salary: "15-20 triệu",
      address: "xã Thanh Liên, Thanh Chương, Nghệ An",
      nganh: "",
    },
    {
      name: "Quynh Le",
      cty: "Nhân viên Mua hàng",
      pro: "Đại học",
      salary: "15-20 triệu",
      address: "xã Thanh Liên, Thanh Chương, Nghệ An",
      nganh: "",
    },
    {
      name: "Quynh Le",
      cty: "Nhân viên Mua hàng",
      pro: "Đại học",
      salary: "15-20 triệu",
      address: "xã Thanh Liên, Thanh Chương, Nghệ An",
      nganh: "",
    },
    {
      name: "Quynh Le",
      cty: "Nhân viên Mua hàng",
      pro: "Đại học",
      salary: "15-20 triệu",
      address: "xã Thanh Liên, Thanh Chương, Nghệ An",
      nganh: "",
    },
    {
      name: "Quynh Le",
      cty: "Nhân viên Mua hàng",
      pro: "Đại học",
      salary: "15-20 triệu",
      address: "xã Thanh Liên, Thanh Chương, Nghệ An",
      nganh: "",
    },
    {
      name: "Quynh Le",
      cty: "Nhân viên Mua hàng",
      pro: "Đại học",
      salary: "15-20 triệu",
      address: "xã Thanh Liên, Thanh Chương, Nghệ An",
      nganh: "",
    },
  ];
  return (
    <div>
      <div class="mb-3 under">
        <a href="/trang-chu">Trang chủ</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
        <span>Người tìm việc</span>
      </div>
      <div className="findpeople">
        <div className="right">
          <div className="text-header">
            Người tìm việc mới nhất ({datas.length})
          </div>
          <div className="findpeople-body">
            {datas.map((data, index) => (
              <div className="findpeople-body-component" key={index}>
                <img src={url} alt="Thao" />
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted b">
                      {data.cty}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Giới tính: <span style={{color : "black"}}>{sex}</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kinh nghiệm:{" "}
                      <span style={{color : "black"}}>{level}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trình độ:{" "}
                      <span style={{color : "black"}}>{data.pro}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mức lương :{" "}
                      <span style={{color : "black"}}>{data.salary}</span>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Địa chỉ: <span style={{color : "black"}}>{data.address}{" "}</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ngành:{" "}
                      <span style={{color : "black"}}>{data.nganh}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ngày tạo:{" "}
                      <span style={{color : "black"}}>{time}</span>
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="left">
          <div className="text-header">Tìm kiếm việc làm thôi</div>
          <section>
            <div className="list-findpeople">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Tìm kiếm việc làm" />
                </Form.Group>
              </Form>
            </div>
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
              <Form.Select aria-label="Default select example">
                <option>Loại hình</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="list-findpeople">
              <Form.Select aria-label="Default select example">
                <option>Kinh nghiệm</option>
                <option value="1">Pro</option>
                <option value="2">Normal</option>
                <option value="3">TopPro</option>
              </Form.Select>
            </div>
            <div className="list-findpeople">
              <Form.Select aria-label="Default select example">
                <option>Giới tính</option>
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
              </Form.Select>
            </div>
            <div className="list-findpeople">
              <Form.Select aria-label="Default select example">
                <option>Mức lương</option>
                <option value="1">5 - 10 triệu</option>
                <option value="2">10 - 20 triệu</option>
                <option value="3">20 - 30 triệu</option>
              </Form.Select>
            </div>
            <div className="list-findpeople">
              <Button type="submit">Tìm kiếm</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Findpeople;

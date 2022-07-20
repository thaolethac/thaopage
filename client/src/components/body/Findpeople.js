import React, {useState} from "react";
import "../css/Findpeople.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

// import { IconName } from "react-icons/ai";
// import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { PatchPlus } from "react-bootstrap-icons";
const Findpeople = () => {
  const today = new Date();
  // const [id, setId] = useState(null);
  // const [likes, setLikes] = useState("");

  const url =
    "https://file.asxh.org/uploads/767ea513-50a1-4e83-83cd-442db2a57c34/trung%20tam.jpg";
  const des = "Sàn giao dịch việc làm tại Nghệ An";
  const time = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  const datas = [
    {
      title: "Bệnh viện Quốc tế Vinh tuyển: Nhân viên kế toán",
      like: 2,
    },
    {
      title: "CÔNG TY TNHH T&T VINA Tuyển : Nhiều vị trí ngành may tại TP Vinh",
      like: 4,
    },
    {
      like: 7,
      title:
        "CÔNG TY TNHH T&T Mai Linh Tuyển : Điều hành tiếp thị, NV kỹ thuật - checker",
    },
    {
      title: "Công ty TNHH Châu Tiến tuyển: LX nâng, vận hành máy, LĐPT",
      like: 0,
    },
    {
      title: "CÔNG TY TNHH VSIP NGHỆ AN TUYỂN GIÁM SÁT AN LOÀN LAO ĐỘNG:",
      like: 0,
    },
    {
      title:
        "CÔNG TY TNHH MAY BLS TUYỂN DỤNG SỐ LƯỢNG NHÂN SỰ LỚN TẠI HƯNG NGUYÊN, NGHI LỘC",
      like: 0,
    },
    {
      title: "Tuyển dụng Công nhân sản xuất - các bộ phận khối văn phòng",
      like: 0,
    },
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
  ]
  const [like, setLike] = useState(null)
  const [indexx, setIndexx] = useState(null)
  const [dataer, setDataer] = useState(datas)
  const navigate = useNavigate()
  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  const Click = (index) => {
    setLike(dataer[index].like+=1)
    if(!route()) {
      alert("Vui lòng đăng nhập nhé bạn iu!")
    }
  }
  const users = useSelector(state => state.isLoggedIn)


return (
    <div>
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
        <span> Việc tìm người</span>
      </div>
      <div className="findpeople">
        <div className="right">
          <div className="text-header">Việc làm mới nhất ({datas.length})</div>
          <div className="findpeople-body">
            {dataer.map((data, index, past) => (
              <div className="findpeople-body-component" key={index}>
                <img src={url} alt="Thao" />
                <Card style={{ border: "none" }}>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted b">
                      {des}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Thời gian : {time}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Mức lương : thỏa thuận
                    </Card.Subtitle>
                    <span>
                      <Button onClick ={() =>Click(index, data.like)} style={{ margin: "3px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="18"
                          fill="currentColor"
                          class="bi bi-facebook"
                          viewBox="0 0 16 20"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        &nbsp;&nbsp;Like {data.like}
                      </Button>
                    </span>
                    <a href="https://www.facebook.com/stories/create" target={`_blank`}>
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-up-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" />
                        </svg>
                        &nbsp;&nbsp;Share
                      </Button>
                    </a>
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
                  <Form.Control className="inputt" type="text" placeholder="Tìm kiếm việc làm" />
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

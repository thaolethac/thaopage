import React, { useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Avatar from "./Avatar";
import "./Offcanvas.css";
import Login from "../body/Login";
import Register from "../body/Register";

const style = {
    backgroundColor: "#fdbd27",
    color: "#fff",
  };
  const styles = {};
  const Data = [
    {
      name: "Trang chủ",
      link: "trang-chu",
    },
    {
      name: "Giới thiệu",
      link: "gioi-thieu",
    },
    {
      name: "Việc tìm người",
      link: "viec-tim-nguoi",
    },
    {
      name: "Người tìm việc",
      link: "nguoi-tim-viec",
    },
    {
      name: "Tin tức",
      link: "tin-tuc",
    },
    {
      name: "Sàn giao dịch",
      link: "san-giao-dich",
    },

  ];
const Menu = () => {
    const navigate = useNavigate();

    const location = useLocation();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };
  useEffect(() => {
    if (route()) {
      setUser(true);
      navigate("/trang-chu");
    } else {
      setUser(false);
    }

    //   async function getUser() {
    //     try {
    //       const response = await axios.get("http://localhost:3000/getuser");
    //       setDatas(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   getUser();
  }, [user]);
  return (
    <div>
      <div className="small-width" variant="primary">

        <div class="small-a-logo-header" onClick={handleShow}>
          <Link to="/trang-chu">
            <img
              src="http://vieclamnghean.vn/Content/assets/img/logo-menu.png"
              alt="Logo"
              className="small-a-img-01"
            />
          </Link>
          <Link to="/trang-chu" className="small-a-link-01">
            An ninh xã hội
          </Link>
        </div>
        <div className="small-width-right">
          {user ? <Avatar /> : " " }
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div class="a-logo-header" onClick={handleClose}>
              <Link to="/trang-chu">
                <img
                  src="http://vieclamnghean.vn/Content/assets/img/logo-menu.png"
                  alt="Logo"
                  className="a-img-01 small-a-img-01"
                />
              </Link>
              <Link to="/trang-chu" className="a-link-01 small-a-link-01">
                An ninh xã hội
              </Link>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div class="a-navbar-near-logo">
        <div class="a-navbar-near-logo-1">
          {Data.map((data, index) => (
            <Link
              style={
                location.pathname === `/${data.link}` ? style : styles
              }
              class={"a-tabcontent"}
              to={"/" + data.link}
              key={index}
              onClick={handleClose}
            >
              {data.name}
            </Link>
          ))}
          <p className=" sign-in a-tabcontent" onClick={() => setShowLogin(!showLogin)}>
              Đăng nhập
          </p>
          <p className=" sign-up a-tabcontent" onClick={() => setShowRegister(!showRegister)}>
              Đăng kí
          </p>
          
        </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      {showLogin ? <Login/> : ""}
      {showRegister ? <Register/> : ""} 
    </div>
  );
};
export default Menu;

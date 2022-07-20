import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../container/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Modal, Accordion } from "react-bootstrap";
import "./Header.css";
import { useNavigate } from "react-router";
import Login from "../body/Login";
import Register from "../body/Register";
import Avatar from "./Avatar";
import Offcanvas from "./Offcanvas";
import Banner from "./Banner";
// import Homeavatar from "../profile/Homeavatar";

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
  // {
  //   name: "Đăng kí",
  //   link: "dang-ki",
  // },
  // {
  //   img : ""
  // }
];
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  const [user, setUser] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [admin, setAdmin] = useState("");

  const logout = () => {
    alert("You out ?");
    localStorage.removeItem("user");
    navigate("/trang-chu");
    window.location.reload();
    dispatch(logoutAction());
  };
  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  const users = useSelector(state => state.isLoggedIn)
  // const [datas, setDatas] = useState([]);
  useEffect(() => {
    setInterval(() => setWidth(window.innerWidth), 4);
    const adminer = JSON.parse(localStorage.getItem("user"));
    if (adminer) {
      setAdmin(adminer);
    }
    if (route()) {
      setUser(true);
    
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
      <div class="shadow mb-3 bg-body rounded">
        <div class="header">
          {width > 1155 ? (
            <div class="navbars">
              <div class="logo-header">
                <Link to="/trang-chu">
                  <img
                    src="http://vieclamnghean.vn/Content/assets/img/logo-menu.png"
                    alt="Logo"
                    className="img-01"
                  />
                </Link>
                <Link to="/trang-chu" className="link-01">
                  An ninh xã hội
                </Link>
              </div>
              <div class="navbar-near-logo">
                <div class="navbar-near-logo-1">
                  {Data.map((data, index) => (
                    <Link
                      style={
                        location.pathname === `/${data.link}` ? style : styles
                      }
                      class={"tabcontent"}
                      to={"/" + data.link}
                    >
                      {data.name}
                    </Link>
                  ))}
                </div>
                {!user ? (
                  <div className="navbar-logout">
                    <Link
                      class="last-Link-1"
                      to={location.pathname}
                      onClick={() => setShowRegister(!showRegister)}
                    >
                      &nbsp;&nbsp;Đăng kí &nbsp;&nbsp;
                    </Link>

                    <Link
                      class="last-Link"
                      to={location.pathname}
                      onClick={() => setShowLogin(!showLogin)}
                    >
                      &nbsp;&nbsp;Đăng nhập&nbsp;&nbsp;
                    </Link>
                  </div>
                ) : (
                  <div className="navbar-login" style={{ cursor: "pointer" }}>
                    <Avatar />
                  </div>
                )}{" "}
              </div>
            </div>
          ) : (
            <div>
              <Offcanvas />
            </div>
          )}
        </div>
      </div>
      {showRegister ? <Register /> : ""}
      {showLogin ? <Login /> : ""}
    </div>
  );
};

export default Header;

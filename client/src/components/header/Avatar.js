import React, { useEffect, useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../container/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";


const Avatar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [admin, setAdmin] = useState("");

    const logout = () => {
      alert("You out ?");
      localStorage.removeItem("user");
      navigate("/trang-chu");
      window.location.reload();
      dispatch(logoutAction());
    };
    useEffect(() => {
        const adminer = JSON.parse(localStorage.getItem("user"));
        if (adminer) {
          setAdmin(adminer);
        }
})
  return (
    <Fragment>
      <Dropdown style={{marginTop:"-5px"}}>
        <Dropdown.Toggle
          variant="secondary"
          style={{width:"170px", height:"40px"}}
        >
        <div style ={{display:"flex"}}>
        <img
        src="https://thumbs.dreamstime.com/z/admin-sign-laptop-icon-stock-vector-166205404.jpg"
        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        alt="Thao"
          />
          <p
            style={{width:"50%" }}
          >
            &nbsp;&nbsp;{admin}
          </p>{" "}
          </div>
          </Dropdown.Toggle>
          
          <Dropdown.Menu variant="dark" style={{ textAlign: "center",width:"170px" }}>
          <Dropdown.Item href="#/action-1">
          Action
          </Dropdown.Item>
          <Dropdown.Item href="/thong-tin-cua-toi">
            <Link to={"/thong-tin-cua-toi"} style={{color:"#fff"}}>
              Hồ sơ của tôi
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4" onClick={logout}>Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
};

export default Avatar;

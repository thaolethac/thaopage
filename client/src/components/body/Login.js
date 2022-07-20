import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useStore,useSelector } from "react-redux";
import { loginAction, getuserAction } from "../../container/actions";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const User = {
    username
  };
  const usered = {
    username,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = dispatch(loginAction(User));
    login
      .then((data) => {
        setShow(false)
        navigate("/trang-chu");
        localStorage.setItem('user', JSON.stringify(username))
              window.location.reload()

      })
      .catch(() => setError(true));
    console.log(username);
  };

  return (
    <div>
      <div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Đăng nhập</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form method="POST">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ width: "100%" }}
                />
                {username === "" ? (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "5%",
                      fontWeight: "600",
                    }}
                  >
                    Mời bạn nhập vào !{" "}
                  </p>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "100%" }}
                />
                {password === "" ? (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "5%",
                      fontWeight: "600",
                    }}
                  >
                    Mời bạn nhập vào !{" "}
                  </p>
                ) : (
                  ""
                )}
              </Form.Group>
              {error ? (
                <p
                  style={{ color: "red", fontWeight: "600", marginTop: "10px" }}
                >
                  Tên đăng nhập hoặc mật khẩu không đúng !!
                </p>
              ) : (
                ""
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Login;

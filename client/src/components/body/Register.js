import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Modal } from "react-bootstrap";
import { registerAction } from "../../container/actions";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [name, setName] = useState(" ")

  const [password, setPassword] = useState(" ");
  const [rpassword, setRpassword] = useState(" ");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [focus, setFocus] = useState(true);
  const [showlogin, setShowLogin] = useState(false);

  const handleClose = () => {
    setShow(false);

  };

  const newUser = {
    username,
    email,
    password,
    rpassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      password !== rpassword ||
      username === "" ||
      email === "" ||
      password === "" ||
      rpassword === ""
    ) {
      setShow(true);
    } else {
      const vadidate = dispatch(registerAction(newUser));
      vadidate
        .then((data) => {setShowLogin(true)
            setShow(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setShow(true);
  };

  return (
    // <div>
    //   <span className="under">
    //     <a href="/trang-chu">Đăng kí</a>
    //   </span>
    //   <div className="p-4">
        // <Form method="POST">
        //   <Form.Group className="mb-3" controlId="formBasicEmail">
        //     <Form.Label>Username</Form.Label>
        //     <Form.Control
        //       autoFocus = {focus}
        //       type="text"
        //       placeholder="Enter username"
        //       onChange={(e) => setUsername(e.target.value)}
        //       style={{ width: "30%" }}
        //     />
        //     {username === "" ? (
        //       <p
        //         style={{
        //           color: "red",
        //           marginLeft: "31%",
        //           marginTop: "-30px",
        //           fontWeight: "600",
        //         }}
        //       >
        //         Mời bạn nhập vào !{" "}
        //       </p>
        //     ) : (
        //       ""
        //     )}
        //   </Form.Group>
        //   <Form.Group className="mb-3" controlId="formBasicEmail">
        //     <Form.Label>Email address</Form.Label>
        //     <Form.Control
        //       type="email"
        //       placeholder="Enter email"
        //       onChange={(e) => setEmail(e.target.value)}
        //       style={{ width: "30%" }}
        //     />
        //     {email === "" ? (
        //       <p
        //         style={{
        //           color: "red",
        //           marginLeft: "31%",
        //           marginTop: "-30px",
        //           fontWeight: "600",
        //         }}
        //       >
        //         Mời bạn nhập vào !{" "}
        //       </p>
        //     ) : (
        //       ""
        //     )}
        //   </Form.Group>

        //   <Form.Group className="mb-3" controlId="formBasicPassword">
        //     <Form.Label>Password</Form.Label>
        //     <Form.Control
        //       type="password"
        //       placeholder="Password"
        //       onChange={(e) => setPassword(e.target.value)}
        //       style={{ width: "30%" }}
        //     />
        //     {password !== rpassword ? (
        //       <p
        //         style={{
        //           color: "red",
        //           marginLeft: "31%",
        //           marginTop: "-30px",
        //           fontWeight: "600",
        //         }}
        //       >
        //         Mật khẩu không trùng khớp
        //       </p>
        //     ) : (
        //       ""
        //     )}
        //     {password === "" ? (
        //       <p
        //         style={{
        //           color: "red",
        //           marginLeft: "31%",
        //           marginTop: "-30px",
        //           fontWeight: "600",
        //         }}
        //       >
        //         Mời bạn nhập vào !{" "}
        //       </p>
        //     ) : (
        //       ""
        //     )}
        //   </Form.Group>
        //   <Form.Group className="mb-3" controlId="formBasicPassword">
        //     <Form.Label>Repeat Password</Form.Label>
        //     <Form.Control
        //       type="password"
        //       placeholder="Password"
        //       onChange={(e) => setRpassword(e.target.value)}
        //       style={{ width: "30%" }}
        //     />
        //     {rpassword === "" ? (
        //       <p
        //         style={{
        //           color: "red",
        //           marginLeft: "31%",
        //           marginTop: "-30px",
        //           fontWeight: "600",
        //         }}
        //       >
        //         Mời bạn nhập vào !{" "}
        //       </p>
        //     ) : (
        //       ""
        //     )}
        //   </Form.Group>
        //   <Button variant="primary" type="submit" onClick={handleSubmit}>
        //     Đăng kí
        //   </Button>
        // </Form>
    //     <div>
    //       <Modal show={show} onHide={handleClose}>
    //         <Modal.Header closeButton>
    //           <Modal.Title>Có lỗi xảy ra !!</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>Bạn có muốn đăng kí tiếp ?</Modal.Body>
    //         <Modal.Footer>
    //           <Button
    //             variant="secondary"
    //             onClick={() => navigate("/trang-chu")}
    //           >
    //             Về trang chủ
    //           </Button>
    //           <Button variant="primary" onClick={handleClose}>
    //             Tiếp tục
    //           </Button>
    //         </Modal.Footer>
    //       </Modal>
    //     </div>
    //   </div>
    // </div>
    <div>
      {showlogin ? <Login/> : ""}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng kí</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form method="POST">
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus = {focus}
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%" }}
            />
            {username === "" ? (
              <p
                style={{
                  color: "red",
                  marginLeft: "5%",
                  // marginTop: "-30px",
                  fontWeight: "600",
                }}
              >
                Mời bạn nhập vào !{" "}
              </p>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%" }}
            />
            {email === "" ? (
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
            {password !== rpassword ? (
              <p
                style={{
                  color: "red",
                  marginLeft: "5%",
                  fontWeight: "600",
                }}
              >
                Mật khẩu không trùng khớp
              </p>
            ) : (
              ""
            )}
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setRpassword(e.target.value)}
              style={{ width: "100%" }}
            />
            {rpassword === "" ? (
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
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;

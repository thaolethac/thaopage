import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const Login = () => {
  useEffect(() => {
    async function getdata() {
      await axios
        .get("http://localhost:3000/dang-ki")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
     
    }
    getdata();
  });
  return (
    <div>
      Thao
    </div>
  );
};

export default Login;

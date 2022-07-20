import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createpostAction, updatepostAction } from "../../container/actions";
// import { deletepostAction } from "../../container/actions";
import "../css/Home.css";
import axios from "axios";
import { useNavigate } from "react-router";
const Home = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState(" ");
  const [des, setDes] = useState(" ");
  const [newPost, setNewPost] = useState(" ");
  const [newDes, setNewDes] = useState(" ");
  const [id, setId] = useState(" ");
  const [fix, setFix] = useState(true);
  const [user, setUser] = useState(true)
  const [love, setLove] = useState(["anh yêu em"])
  const navigate = useNavigate();
  // const [view, setView] = useState(1)

  const newPosts = {
    user : "lethacthao70@gmail.com",
    title: post,
    description: des,
  };
  const [datas, setDatas] = useState([]);
  // setInterval(() =>{
  
  //     setLove(prev => [...prev, " " + love])
  // }
  // ,1000)

  useEffect(() => {
  // Xem số lần đăng nhập của mình 
  //   if (typeof(window.localStorage) !== "undefined") {
  //     var view = window.localStorage.getItem(window.location.pathname + '_counter');
  //     if (view === null) {
  //         view = 1;
  //         window.localStorage.setItem(window.location.pathname + '_counter', 0);
  //     } else {
  //         view++;
  //         setView(view)
  //     }
  //     window.localStorage.setItem(window.location.pathname + '_counter', view);
  // } else {
  //     //
  // }
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:3000/getlistpost');
      setDatas(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  getUser()
  }, [datas]);
  const Click = () => {
    dispatch(createpostAction(newPosts));
    setPost(" ");
    setDes(" ");
  };
  const Deleted = (id) => {
    // alert("Bạn muốn xóa post này");
    axios.delete(`http://localhost:3000/deletepost/${id}`);
  };
  const Fixed = (id) => {
   console.log(id)
  };
  const Updated = (id) => {
    const updatePost = {
      id : id,
      newPost : newPost,
      newDes : newDes,
    }
    dispatch(updatepostAction(updatePost))
    // axios.put("http://localhost:3000/updatepost", {
    //    id : id,
    //   newPost : newPost,
    //   newDes : newDes,
    // })
  };
  return (
    <div className="post">
      <div className="home-post">
        <div className="form-home">
          <Form.Label htmlFor="inputPassword5">New Post</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div className="button-homes">
          <Button
            variant="primary"
            style={{ height: "70px", width: "70px" }}
            onClick={Click}
          >
            Thêm
          </Button>{" "}
        </div>
      </div>
      <div className="new-post">
        {datas.map((data, index) => (
          <div className="home-post" key={index}>
            {fix ? (
              <div className="form-home" style={{ marginLeft: "40px" }}>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  value={data.title}
                />
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  value={data.description}
                />
              </div>
            ) : (
              <div className="form-home" style={{ marginLeft: "60px" }}>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => setNewPost(e.target.value)}
                />
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => setNewDes(e.target.value)}
                />
              </div>
            )}
            <div className="button-home">
              <Button variant="secondary" onClick={() => Deleted(data._id)}>
                Xóa
              </Button>{" "}
              {fix ? (
                <Button
                  variant="secondary"
                  onClick={() => {
                    setFix(!fix);
                    Fixed(data._id);
                  }}
                >
                  Sửa
                </Button>
              ) : (
                <Button variant="secondary" onClick={() =>{
                  setFix(!fix)
                  Updated(data._id)

                }}>
                  Update
                </Button>
              )}
            </div>
          </div>
        ))}
        <h2>{id}</h2>
      </div>
    </div>
  );
};

export default Home;

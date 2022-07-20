import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer";
import Home from "./components/body/Home";
import Homes from "./components/body/Homes";
import Intro from "./components/body/Intro";
import Findpeople from "./components/body/Findpeople";
import Register from "./components/body/Register";
import Login from "./components/body/Login";
import Peoplefind from "./components/body/Peoplefind";
import News from "./components/body/News";
import Exchanges from "./components/body/Exchanges";
import Sticky from "./components/sticky/Sticky";
import {useLocation } from "react-router-dom";
import Profile from "./components/profile/Profile.js";
import Banner from "./components/header/Banner.js";
import Internet from "./components/body/Internet.js";
import {isMobile} from 'react-device-detect';

function App() {
  const [connect, setConnect] = useState(false)
  const location = useLocation();
  console.log(navigator.onLine)
  window.addEventListener("offline", () =>
  setConnect(false)
);
if(!isMobile){

  return (
    <div className="App">
    {connect ? "" :<Internet/>}
    {location.pathname === "/thong-tin-cua-toi" ? "": <Banner/>}

      <Header/>
      <Routes>
      <Route path="/gioi-thieu" element={<Intro />} />
        <Route path={"/"} element={<Homes />} />
        <Route path={"/trang-chu"} element={<Homes />} />
        <Route path="/viec-tim-nguoi" element={<Findpeople />} />
        <Route path="/nguoi-tim-viec" element={<Peoplefind />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/san-giao-dich" element={<Exchanges />} />
        <Route path="dang-ki" element={<Register />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path={"/thong-tin-cua-toi"} element={<Profile/>}/>
      </Routes>
      <Sticky />
      {location.pathname === "/thong-tin-cua-toi" ? "": <Footer/>}
    </div>
  );
}
}

export default App;

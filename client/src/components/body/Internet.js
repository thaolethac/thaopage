import React from "react";
import Button from "react-bootstrap/Button";
import '../css/Internet.css';
const Internet = () => {
  return (
    <div>
      <Button variant="light" type="submit" size="lg" className="button-connect-true">
        <div style={{ display: "flex" }}>
          <div className="connect-true">
          <i class="fa-solid fa-wifi-exclamation"></i>
            <i class="fa-solid fa-wifi" style={{zoom : "1.4", padding:"5px", color:"rgb(150 211 108)"}}></i>
          </div>
          <div className="online" style={{fontSize:"25px", paddingLeft:"4px", fontWeight:"500"}}>Bạn đang Online!!</div>
        </div>
      </Button>
    </div>
  );
};

export default Internet;

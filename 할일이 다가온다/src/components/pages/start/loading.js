import React from "react";

import "../../../styles/BackGround.css";
import {StartButton}  from "../../MyButton/MyButton.js"; 


function Loading() {
  return (
        <div className="black_bg">
          <h2>모험 준비 중...</h2>
          <StartButton to="/">시작!</StartButton>
        </div>
      
    );
}

export default Loading;
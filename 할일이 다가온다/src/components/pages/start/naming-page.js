import React from "react";
import {NextButton} from "../../MyButton/MyButton.js"
import {BeforeButton} from "../../MyButton/MyButton.js"
import {NextInput} from "../../Input/Input.js"
import "../../../styles/BackGround.css";
import "../../../styles/font.css";

function Naming() {

  return (
    
      <div className="black_bg">
        <h2>이름을 입력하시오...</h2>
        <NextInput to="/target"/>
        <BeforeButton to="/">이전</BeforeButton>
        <NextButton to="/target">다음</NextButton>
      </div>
  );

}

export default Naming;
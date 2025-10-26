import React from "react";
import {NextButton} from "../../MyButton/MyButton.js"
import {Input} from "../../Input/Input.js"
import "../../../styles/BackGround.css";
import "../../../styles/font.css";

function Naming() {

  return (
    
      <div className="black_bg">
        <h2>이름을 입력하시오...</h2>
        <Input/>
        <NextButton to="/target">다음으로</NextButton>
      </div>
  );
}

export default Naming;
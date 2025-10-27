import React from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";
import {NextInput} from "../../Input/Input.js"

function Select_reward() {
  return (
    <div className="black_bg">
      <h2>달성 보상을 설정하시오...</h2>
      {/*<p className="text">what?</p>*/}

      <NextInput to="/todo"/>
      <BeforeButton to="/target">이전</BeforeButton>
      <NextButton to="/todo">다음</NextButton>
    </div>
  );
}

export default Select_reward;
import React from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";
import {AddInput} from "../../Add/Add.js"

function Targeting() {
  return (
    <div className="black_bg">
      <h2>목표를 설정하시오...</h2>
      {/*<p className="text">what?</p>*/}
      <AddInput to="/select_reward"/>
      <BeforeButton to="/name">이전</BeforeButton>
      <NextButton to="/select_reward">다음</NextButton>
    </div>
  );
}

export default Targeting;
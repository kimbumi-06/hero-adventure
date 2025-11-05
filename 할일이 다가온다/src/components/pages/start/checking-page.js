import React from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";

function TodoCheck() {
  return (
    <div className="black_bg">
      <h2>입력된 목표</h2>
      <h6 className="text">이것저것</h6>


      <BeforeButton to="/select_reward">이전</BeforeButton>
      <NextButton to="/loading">다음</NextButton>
    </div>
  );
}

export default TodoCheck;

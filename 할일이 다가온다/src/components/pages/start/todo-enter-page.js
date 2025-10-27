import React from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";

function TodoEnter() {
  return (
    <div className="black_bg">
      <h2>입력된 목표</h2>
      <p className="text">이것저것</p>
      <BeforeButton to="/select_reward">이전</BeforeButton>
      <NextButton to="/">다음</NextButton>
    </div>
  );
}

export default TodoEnter;

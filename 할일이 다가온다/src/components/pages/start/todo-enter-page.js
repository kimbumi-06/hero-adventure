import React from "react";
import { NextButton } from "../../MyButton/MyButton";

function TodoEnter() {
  return (
    <div className="App">
      <div className="black_bg">
        <h2>입력된 목표</h2>
        이것저것
        <NextButton to="/">다음으로</NextButton>
      </div>
    </div>
  );
}

export default TodoEnter;

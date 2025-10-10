import React from "react";
import { NextButton } from "../../MyButton/MyButton";

function TodoEnter() {
  return (
    <div className="App">
      <div className="black_bg">
        <h2>Enter Todo...</h2>
        here!
        <NextButton to="/select">다음으로</NextButton>
      </div>
    </div>
  );
}

export default TodoEnter;

import React from "react";
import {NextButton} from "../../MyButton/MyButton.js"

function Naming() {

  return (
    <div className="App">
      <div className="black_bg">
        <h2>Naming</h2>
        Naming...
        <NextButton to="/todo">다음으로</NextButton>
      </div>
    </div>
  );
}

export default Naming;
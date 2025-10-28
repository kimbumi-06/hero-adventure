import React, { useState } from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";
import {Input} from "../../Add/Add.js"

function SelectAdventure() {

  const [inputValue, setInputValue] = useState(""); //지금 입력창 값

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; //입력창 바뀌면 계속 불려오는 애

  return (
    <div className="black_bg">
      <h2>모험을 선택하시오...</h2>
      {/*<p className="text">what?</p>*/}

      <Input
        value={inputValue}
        onChange={handleInputChange}
      />

      <div>
        <BeforeButton to="/name">이전</BeforeButton>
        <NextButton to="/target">다음</NextButton>
      </div>

    </div>
  );
}

export default SelectAdventure;
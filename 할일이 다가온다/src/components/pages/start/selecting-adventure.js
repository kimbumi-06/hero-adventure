import React, { useState } from "react";

import { NextButton, BeforeButton } from "../../MyButton/MyButton";
import {NextInput} from "../../Input/Input.js"

import { useAdventure } from "../../../hooks/useUser.js";

function SelectAdventure() {

  const {adventure, setAdventure} = useAdventure(""); //지금 입력창 값
  const [isValue, setIsValue] = useState(!!adventure);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setAdventure(inputValue);

    if (inputValue.length > 0) {
      setIsValue(true);
    } else {
      setIsValue(false);
    }
  }; //입력창 바뀌면 계속 불려오는 애

  return (
    <div className="black_bg">
      <h2>모험을 선택하시오...</h2>
      {/*<p className="text">what?</p>*/}

      <NextInput
        to="/target"
        value={adventure}
        onChange={handleInputChange}
      />

      <div>
        <BeforeButton to="/name">이전</BeforeButton>
        {isValue && <NextButton to="/target">다음</NextButton>}
      </div>

    </div>
  );
}

export default SelectAdventure;
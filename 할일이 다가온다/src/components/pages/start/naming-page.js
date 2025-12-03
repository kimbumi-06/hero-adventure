import React, { useState } from "react";

import {NextButton} from "../../MyButton/MyButton.js"
//import {BeforeButton} from "../../MyButton/MyButton.js"
import {NextInput} from "../../Input/Input.js"

import {useName} from "../../../hooks/useUser.js"


function Naming() {

  const {name, setName} = useName();
  const [isValue, setIsValue] = useState(!!name);

  //지금 입력창 값
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    setName(inputValue);
    if (inputValue.length > 0) {
      setIsValue(true);
    } else {
      setIsValue(false);
    }
  }

  return (
    <div className="black_bg">
      <h2>이름을 입력하시오...</h2>
      <NextInput 
      to="/select_adventure" 
      value={name} 
      onChange={handleInputChange} />

      {/*<BeforeButton to="/">이전</BeforeButton>*/}
      { isValue &&
      <NextButton to="/select_adventure">다음</NextButton>}
    </div>
  );

}

export default Naming;
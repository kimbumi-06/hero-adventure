import React from "react";
import {NextButton} from "../../MyButton/MyButton.js"
//import {BeforeButton} from "../../MyButton/MyButton.js"
import {NextInput} from "../../Input/Input.js"
import {useName} from "../../../hooks/useUser.js"


function Naming() {

  const {name, setName} = useName();

  //지금 입력창 값
  const handleInputChange = (event) => {
    setName(event.target.value);
  }


  return (
    <div className="black_bg">
      <h2>이름을 입력하시오...</h2>
      <NextInput 
      to="/select_adventure" 
      value={name} 
      onChange={handleInputChange} />

      {/*<BeforeButton to="/">이전</BeforeButton>*/}
      <NextButton to="/select_adventure">다음</NextButton>
    </div>
  );

}

export default Naming;
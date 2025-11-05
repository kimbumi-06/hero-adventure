import React, {useState} from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";
import {NextInput} from "../../Input/Input.js"
import { useReward } from "../../../hooks/useUser.js";

function SelectReward() {

  const {reward, setReward} = useReward(""); //지금 입력창 값
  const handleInputChange = (event) => {
    setReward(event.target.value);
  }
  
  return (
    <div className="black_bg">
      <h2>달성 보상을 설정하시오...</h2>
      {/*<p className="text">what?</p>*/}

      <NextInput 
      to="/todo" 
      value={reward} 
      onChange={handleInputChange} />

      <div>{/*둘 중 하나 고르는 창*/}</div>

      <div>
        <BeforeButton to="/target">이전</BeforeButton>
        <NextButton to="/todo">다음</NextButton>
      </div>
    </div>
  );
}

export default SelectReward;
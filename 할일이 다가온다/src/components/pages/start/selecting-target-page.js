import React, { useState } from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";
import {AddInput} from "../../Add/Add.js"

function Targeting() {
  // 추가할 장소 만들어두는 중

  const [item, setItem] = useState([]); //추가된 항목들 저장하는 리스트
  const [inputValue, setInputValue] = useState(""); //지금 입력창 값

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; //입력창 바뀌면 계속 불려오는 애

  const handleAddItem = () => {
    if (inputValue.trim() !== "") return; //빈칸이면 실행안함

    const newItem = {
      id: Date.now(),
      text: inputValue
    };

    setItem((items) => [...items, newItem]);

    setInputValue(""); //입력창 초기화
  };

  return (
    <div className="black_bg">
      <h2>목표를 설정하시오...</h2>
      {/*<p className="text">what?</p>*/}

      <AddInput 
        value={inputValue}
        onChange={handleInputChange}
        onAddItem={handleAddItem}
       />

      <BeforeButton to="/name">이전</BeforeButton>
      <NextButton to="/select_reward">다음</NextButton>
    </div>
  );
}

export default Targeting;
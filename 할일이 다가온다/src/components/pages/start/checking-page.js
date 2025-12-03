import React, {useState} from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";

import { useAdventure } from "../../../hooks/useUser";
import { useTarget } from "../../../hooks/useUser";


import "../../../styles/font.css"

function TodoCheck() {

  const {adventure} = useAdventure();
  const {targets, updateTargetType} = useTarget([]);

  const [isAdventureClicked, setIsAdventureClicked] = useState(false);

  

  return (
    <div className="black_bg">
      <h2>입력된 목표</h2>
      <h6 className="text">이것저것</h6>


      <BeforeButton to="/select_reward">이전</BeforeButton>
      <NextButton to="/loading">다음</NextButton>
    </div>
  );
}

export default TodoCheck;

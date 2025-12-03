
import React, { useState, useEffect } from "react";

import { DisplayList } from "../../Display/DisplayList.js";
import { Dot } from "../../Display/Dot.js";
import { BigModal } from "../../Modal/Modal.js";

import { useAdventure } from "../../../hooks/useUser.js";
import { useTarget } from "../../../hooks/useUser.js";

import "../../../styles/BackGround.css";
import "./RaidPage.css";


function RaidPage() {
  const { targets, deleteTarget } = useTarget([]);
  const { adventure} = useAdventure("");
  const [ targetEnd, setTargetEnd ] = useState(false);


  const dotCount = targets.length;
  const dots = Array.from({ length: dotCount }, (_, index) => index + 1);

  useEffect(() => {
    if (targets.length <= 0) {
      setTargetEnd(true);
    } else {
      setTargetEnd(false); // targets가 다시 채워지면 모달을 숨깁니다.
    }
  }, [targets]);

  return (
    <div className="black_bg raid-page-container">
      {/*상단 배경*/}
      <div className="raid-background-area">
        <h2 className="raid-text">Raid 1. {adventure}</h2>
        {dots.map((num) => (
          <Dot key={num} dotIndex={num} totalDots={dotCount} />
        ))}
      </div>

      {/*하단 할일*/}
      <div className="raid-todo-list-area">
        <ul className="raid-todo-list">
          {targets.map((target) => (
            <DisplayList
              key={target.id}
              item={target}
              onDelete={deleteTarget}
            />
          ))}
        </ul>
      </div>

      {targetEnd && (
        <div>
          <BigModal to="/success">
            <p className="text">Raid 1. {adventure}</p>
            <h2>달성!</h2>
          </BigModal>
        </div>
      )}
    </div>
  );
}

export default RaidPage;

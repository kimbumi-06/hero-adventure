

import "./DisplayList.css";
import "../../styles/font.css";

import { useState } from "react";


import checklistImage from "../../assets/checklist-icon.png";
import repeatImage from "../../assets/repeat-icon.png";
import timerImage from "../../assets/timer-icon.png";

//임시로 삭제버튼 사용
import deleteBtn from "../../assets/deletebtn.png";

export function DisplayList({ item, onDelete, updateTargetType}) {

  const handleDeleteClick = () => {
    onDelete(item.id);
  }

  return (
    <li key={item.id} className="display-list">
      <span style={{ flex: 1 }}>{item.text}</span>

      <div className="btn-group">
        <img
          alt=""
          className="delete-btn"
          src={deleteBtn}
          style={{ filter: "invert(100%)" }}
          onClick={handleDeleteClick}
        />
      </div>
    </li>
  );
}

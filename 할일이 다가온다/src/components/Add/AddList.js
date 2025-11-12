

import "./AddList.css"
import "../../styles/font.css";

import { useState } from "react";

import deleteBtn from "../../assets/deletebtn.png";
import editBtn from "../../assets/editbtn.png"

import checklistImage from "../../assets/checklist-icon.png";
import repeatImage from "../../assets/repeat-icon.png";
import timerImage from "../../assets/timer-icon.png";


export function AddList({ 
  item, 
  onEdit, 
  onDelete, 
  editingId, 
  setEditingId,
  selectingId,
  setSelectingId,
  updateTargetType
}) {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  //const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const isEditing = item.id === editingId;
  const isSelecting = item.id === selectingId;

  const handleSelectClick = () => {
    setSelectingId(isSelecting? null : item.id);
    if (isEditing) setEditingId(null);

  }

  const handleOptionSelect = (selectedType) => {
    updateTargetType(item.id, selectedType);
    setSelectingId(null);
  }

  const handleEditClick = () => {
    setEditingId(item.id);
    setEditText(item.text);
  };

  const handleEditKeyDown = (event) => {
    if (event.key === "Enter") {
      if (editText.trim() === "") return; // 빈칸이면 저장 안함

      onEdit(item.id, editText);
      setEditingId(null); //수정 끝났으니까 값 비우기
    }
  };

  //수정중이면 앞에거 : 아니면 뒤에거(원래)
  return (
    <li key={item.id} className="add-list">
      {isEditing ? (
        <>
          <input
            type="text" // (CSS에서 스타일 필요)
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleEditKeyDown}
            autoFocus // 수정 모드 시 자동으로 포커스
          />
        </>
      ) : (
        <>
          <span>{item.text}</span>

          <div className="btn-group">
            {/*타입선택버튼*/}
            <img
              alt="Select"
              className="select-btn"
              src={checklistImage}
              style={{ filter: "invert(100%)" }} // 아이콘 색상 반전 (필요시)
              onClick={handleSelectClick}
            />

            {/*수정버튼*/}
            <img
              alt=""
              className="edit-btn"
              src={editBtn}
              style={{ filter: "invert(100%)" }}
              onClick={handleEditClick}
            />

            {/*삭제버튼*/}
            <img
              alt=""
              className="delete-btn"
              src={deleteBtn}
              style={{ filter: "invert(100%)" }}
              onClick={handleDeleteClick}
            />
          </div>
        </>
      )}

      {/* 선택모드일ㄹ때 창 표시 */}
      {isSelecting && (
        <div className="selection-options">
          
          <img
            alt="c"
            src={checklistImage}
            className="option-image"
            onClick={() => handleOptionSelect("checklist")}
          />
          <img
            alt="r"
            src={repeatImage}
            className="option-image"
            onClick={() => handleOptionSelect("repeat")}
          />
          <img
            alt="t"
            src={timerImage}
            className="option-image"
            onClick={() => handleOptionSelect("timer")}
          />
        </div>
      )}
    </li>
  );
}

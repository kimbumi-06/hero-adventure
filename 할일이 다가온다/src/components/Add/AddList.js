

import "./AddList.css"
import "../../styles/font.css";

import { useState } from "react";

import deleteBtn from "../../assets/deletebtn.png";
import editBtn from "../../assets/editbtn.png"

export function AddList({ item, onEdit, onDelete, editingId, setEditingId }) {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  //const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const isEditing = item.id === editingId;

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
            <img
              alt=""
              className="edit-btn"
              src={editBtn}
              style={{ filter: "invert(100%)" }}
              onClick={handleEditClick}
            />

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
    </li>
  );
}

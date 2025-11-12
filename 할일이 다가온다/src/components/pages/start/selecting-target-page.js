import React, { useState } from "react";
import { NextButton, BeforeButton } from "../../MyButton/MyButton";
import {AddInput} from "../../Add/Add.js"
import { AddList } from "../../Add/AddList.js";
import { useTarget } from "../../../hooks/useUser.js";
import { useAdventure } from "../../../hooks/useUser.js";

import "../../../styles/font.css"
import "../../../styles/list.css";

function Targeting() {
  // 추가할 장소 만들어두는 중

  const { targets, setTargets, editTarget, deleteTarget, updateTargetType } = useTarget([]); //추가된 항목들 저장하는 리스트
  const [inputValue, setInputValue] = useState(""); //지금 입력창 값

  const [editingId, setEditingId] = useState(null); //리스트 중에 현재 수정중인 항목의 id
  const [selectingId, setSelectingId] = useState(null); //선택창이 눌린 상태인지

  const {adventure} = useAdventure();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; //입력창 바뀌면 계속 불려오는 애

  const handleAddItem = () => {
    if (inputValue.trim() === "") return; //빈칸이면 실행안함

    const newTarget = {
      id: Date.now(),
      text: inputValue
    };

    setTargets((prevTargets) => [...prevTargets, newTarget]);

    setInputValue(""); //입력창 초기화
  };

  return (
    <div className="black_bg">
      <h2 style={{ marginBottom: "5px" }}>목표를 설정하시오...</h2>
      <p className="text">{adventure}</p>

      <AddInput
        value={inputValue}
        onChange={handleInputChange}
        onAddItem={handleAddItem}
      />

      <div className="scrollable-list">
        <ul className="todo-list">
          {targets.map((todo) => (
            <AddList
              key={todo.id}
              item={todo}
              onDelete={deleteTarget}
              onEdit={editTarget}
              editingId={editingId}
              setEditingId={setEditingId}
              selectingId={selectingId}
              setSelectingId={setSelectingId}
              updateTargetType={updateTargetType}
            />
          ))}
        </ul>
      </div>

      <div>
        <BeforeButton to="/select_adventure">이전</BeforeButton>
        <NextButton to="/select_reward">다음</NextButton>
      </div>
    </div>
  );
}

export default Targeting;
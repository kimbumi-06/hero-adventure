import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Modal, ModalButton} from "../Modal/Modal.js";

import "./Input.css";


export function NextInput({ value, onChange, to }) {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();
  const handleKeyDown = (event) => { //엔터키 감지 -> 페이지 넘기는거
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 동작 방지 사실 뭔지 모름
      if (value.trim() === "") return;
      
      openModal();
      //navigate(to);
    }
  };

  const handleCloseModal = () => {
    closeModal();
    navigate(to);
  }

  
    return (
      <div>
        <input
          type="text"
          className="next-input"
          onKeyDown={handleKeyDown}
          value={value}
          onChange={onChange}
        ></input>

        {isModalOpen && (
          <Modal onClose={closeModal}> 저장되었습니다!
            <ModalButton onlcick={handleCloseModal}>
              확인
            </ModalButton>
          
          </Modal>
        )}

      </div>
    );

};


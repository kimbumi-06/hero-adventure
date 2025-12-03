import React from "react";
import { useNavigate } from "react-router-dom";

import "./Modal.css";

export function Modal({children, onClose}) {

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>
    );

};


export function ModalButton({children, to, onClose}) {

const navigate = useNavigate();

    const handleClick = (event) => {
    if (to) {
      navigate(to);
    }
    if (onClose) {
      onClose();
    }
    };

  return (
    <button className="modal-btn" 
    onClick={handleClick} >
      {children}
    </button>
  );
};


export function BigModal({children, to}) {
    const navigate = useNavigate();
      const handleNavigation = (event) => {
        if (to) {
          navigate(to);
        }
      };

    return (
        
        <div className="modal-overlay" onClick={handleNavigation}>
            <div className="big-modal-content">
                {children}
            </div>
        </div>
    );

};

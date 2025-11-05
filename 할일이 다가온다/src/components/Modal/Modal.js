import React from "react";
import "./Modal.css";

export function Modal({children, onClose}) {

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );

};


export function ModalButton({children, onClick}) {

  return (
    <button className="modal-btn" onClick={onClick}>
      {children}
    </button>
  );
};
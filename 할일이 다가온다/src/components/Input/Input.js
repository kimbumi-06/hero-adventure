import { useNavigate } from "react-router-dom";

import "./Input.css";



export function NextInput({ value, onChange, to }) {

  const navigate = useNavigate();
  const handleKeyDown = (event) => { //엔터키 감지 -> 페이지 넘기는거
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 동작 방지 사실 뭔지 모름
      navigate(to);
    }
  };
  
    return (
      <input
        type="text"
        className="next-input"
        onKeyDown={handleKeyDown}
      ></input>
    );

};

export function AddInput({ value, onChange, to }) {

  const navigate = useNavigate();
  const handleKeyDown = (event) => { //엔터키 감지 -> 페이지 넘기는거
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 동작 방지 사실 뭔지 모름
      navigate(to);
    }
  };
  
    return (
      <input
        type="text"
        className="add-input"
        onKeyDown={handleKeyDown}
      />

      

    );

};
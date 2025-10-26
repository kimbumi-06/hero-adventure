import React from "react";
import { useNavigate } from "react-router-dom";

import "./MyButton.css"; // 버튼의 스타일을 담을 CSS 파일

export function StartButton({ children }) {
    const navigate = useNavigate();
  const handleStart = () => {
    navigate('/name');
  };

  return (
    <button className="start-btn" onClick={handleStart}>
      {children} {/*이름 그때그때 짓기*/}
    </button>
  );
}

export function NextButton({children,  to}) {
    const navigate = useNavigate();
    const handleNavigation = (event) => {

    if (to) {
      navigate(to);
    }
  };

  return (
    <button className="next-btn" onClick={handleNavigation}>
      {children} {/*이름 그때그때 짓기*/}
    </button>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";

import "./MyButton.css"; // 버튼의 스타일을 담을 CSS 파일

export function StartButton({ children, to }) {
    const navigate = useNavigate();
  const handleStart = () => {
    navigate(to);
  };

  return (
    <button className="start-btn" onClick={handleStart}>
      {children} {/*이름 그때그때 짓기*/}
    </button>
  );
}

export function NextButton({ children, to }) {
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

export function BeforeButton({ children, to }) {
  const navigate = useNavigate();
  const handleNavigation = (event) => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button className="before-btn" onClick={handleNavigation}>
      {children}
    </button>
  );
}

export function BossButton({ children, to }) {
  const navigate = useNavigate(); 
  const handleClick = (event) => {
    if (to) {
      navigate(to);
    } 
  };

  return (
    <button className="boss-btn" onClick={handleClick}>
      {children}
    </button>
  );
}
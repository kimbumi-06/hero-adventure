import React from "react";
import "./MyButton.css"; // 버튼의 스타일을 담을 CSS 파일

export function StartButton({ children}) {

  const handleStart = () => {
    
    alert("다음 화면!");
  };

  return (
    <button className="start-btn" onClick={handleStart}>
      {children} {/*이름 그때그때 짓기*/}
    </button>
  );
}


import React from "react";
import "../../../App.css";
import {StartButton}  from "../../MyButton/MyButton.js"; 


function Starting() {
  return (
      //JSX 반환 받기 -> 렌더링
      //여기까지는 주석이 이렇게 생김
      <div className="App">
        {/*여기부터 이런 형식*/} {/*JSX는 JS 기반이라 class 써버리면 안됨*/}
        <div className="black_bg">
          {" "}
          {/*부모 컴포넌트가 감싸줘야 오류X + 검은배경 가져옴*/}
          <h2>할 일이 다가온다...</h2>
          <StartButton>시작하기</StartButton>
        </div>
      </div>
    );
}

export default Starting;
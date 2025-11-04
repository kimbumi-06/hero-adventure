import React, {useEffect, useState} from "react";
import {NextButton} from "../../MyButton/MyButton.js"
//import {BeforeButton} from "../../MyButton/MyButton.js"
import {NextInput} from "../../Input/Input.js"


function Naming() {

  //useState 안이 초기값 => 로컬에서 불러온걸 초기값으로 하겠다
  const [name, setName] = useState(() => {
    return localStorage.getItem("userName") || ""; //storedName이 있다면(True)? 그거 반환 : 아니면 공백 반환
  }); 
  


  useEffect(() => {
    localStorage.setItem("userName", name); // 주석의 의도대로 setItem을 추가
  }, [name]);


  //지금 입력창 값
  const handleInputChange = (event) => {
    setName(event.target.value);
  }


  return (
    <div className="black_bg">
      <h2>이름을 입력하시오...</h2>
      <NextInput 
      to="/select_adventure" 
      value={name} 
      onChange={handleInputChange} />

      {/*<BeforeButton to="/">이전</BeforeButton>*/}
      <NextButton to="/select_adventure">다음</NextButton>
    </div>
  );

}

export default Naming;
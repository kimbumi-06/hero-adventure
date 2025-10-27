import { useNavigate } from "react-router-dom";
import "./Add.css";




export function AddInput({ value, onChange, to }) {
  
    const handleKeyDown = (event) => {
    //엔터키 감지 -> 페이지 넘기는거
    
        if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작 방지 사실 뭔지 모름
        onchange(value);
        }
    };

  const handleAddclick = () => {
    onchange(value);
  };

  return (
    <div>
      <input type="text" className="add-input" onKeyDown={handleKeyDown} />

      <button className="add-btn" onClick={handleAddclick}>
        +
      </button>

    </div>
  );
}

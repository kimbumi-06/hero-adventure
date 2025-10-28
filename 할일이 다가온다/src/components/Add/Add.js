
import "./Add.css";

//할일 입력창
export function AddInput({ value, onChange, onAddItem }) {
  
    const handleKeyDown = (event) => {
    //엔터키 감지 -> 페이지 넘기는거
    
        if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작 방지 사실 뭔지 모름
        onAddItem();
        }
    };

  const handleAddclick = () => {
    onAddItem();
  };

  return (
      <div>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />

        <button className="add-btn" onClick={handleAddclick}>
          +
        </button>
      </div>
  );
}

//할일 추가 리스트
export function AddList({ item }) {

  return (
    <li key={item.id} className="add-list">
      <span>{item.text}</span>
    
    </li>

  );
}

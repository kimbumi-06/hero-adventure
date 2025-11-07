import {createContext, useState, useEffect} from 'react';

export const TargetContext = createContext();

export function TargetProvider({ children }) {
  const [targets, setTargets] = useState(() => {
    const savedTargets = localStorage.getItem("targets");
    return savedTargets ? JSON.parse(savedTargets) : [];
  });

  useEffect(() => {
    localStorage.setItem("targets", JSON.stringify(targets));
  }, [targets]);

  const deleteTarget = (idToDelete) => { //변수를 받고
    setTargets((prevtargets) =>          //리스트를 새로 변수로 받고
      prevtargets.filter((target) => target.id !== idToDelete)
      //개별 요소도 새 변수로 받아서 idtodel이랑 같으면 지우기
    );
  };


  const editTarget = (idToEdit, newText) => {
    setTargets((prevTargets) =>
      prevTargets.map((target) =>
        target.id === idToEdit ? {...target, text: newText} : target //삼항연산자? 참이몀ㄴ 텍스트 덮어쓰기
      //이러면 복사한 새 개체를 새로 반환(메모리주소 새로 사용) -> 변화 감지 가능!
      )
    );
  }


  const value = { targets, setTargets, editTarget, deleteTarget };


  return (
    <TargetContext.Provider value={value}>
      {children}
    </TargetContext.Provider>
  );
}


export default TargetContext;
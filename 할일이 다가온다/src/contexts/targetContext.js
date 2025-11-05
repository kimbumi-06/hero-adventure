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


  const value = { targets, setTargets, deleteTarget };


  return (
    <TargetContext.Provider value={value}>
      {children}
    </TargetContext.Provider>
  );
}


export default TargetContext;
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

  
  const value = { targets, setTargets };


  return (
    <TargetContext.Provider value={value}>
      {children}
    </TargetContext.Provider>
  );
}

export default TargetContext;
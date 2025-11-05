import {createContext, useState, useEffect} from 'react';

const AdventureContext = createContext();

export function AdventureProvider({ children }) {
  const [adventure, setAdventure] = useState(() => {
    return localStorage.getItem("userAdventure") || "";
  });

  useEffect(() => {
    localStorage.setItem("userAdventure", adventure);
  }, [adventure]);

  return (
    <AdventureContext.Provider value={{ adventure, setAdventure }}>
      {children}
    </AdventureContext.Provider>
  );
}

export default AdventureContext;
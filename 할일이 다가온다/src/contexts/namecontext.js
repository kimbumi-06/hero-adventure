import {createContext, useState, useEffect} from 'react';

const NameContext = createContext();

export function NameProvider({ children }) {
  const [name, setName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]);

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameContext;
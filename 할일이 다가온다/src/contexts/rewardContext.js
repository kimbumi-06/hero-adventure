import {createContext, useState, useEffect} from 'react';

const RewardContext = createContext();

export function RewardProvider({ children }) {
  const [reward, setReward] = useState(() => {
    return localStorage.getItem("userReward") || "";
  });

  useEffect(() => {
    localStorage.setItem("userReward", reward);
  }, [reward]);

  return (
    <RewardContext.Provider value={{ reward, setReward }}>
      {children}
    </RewardContext.Provider>
  );
}

export default RewardContext;
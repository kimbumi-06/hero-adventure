import {useState} from "react";

import {useReward } from "../../hooks/useUser.js";  

import openReward from "../../assets/open-reward-icon.png";
import closedReward from "../../assets/closed-reward-icon.png";

import "./Reward.css";


export function Reward(onClick) {

    const [isOpen, setIsOpen] = useState(false);
    const { reward } = useReward("");

    const handleRewardClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="reward-icon" onClick={handleRewardClick}>
      {isOpen === false ? (
        <img src={closedReward} alt="Reward Icon" />
      ) : (
        <div>
          <img src={openReward} alt="Reward Icon" />
          <p className="reward-text">{reward}</p>
        </div>
      )}
    </div>
  );
}

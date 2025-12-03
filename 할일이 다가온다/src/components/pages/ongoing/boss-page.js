import react from 'react';
import { Reward } from '../../Display/Reward.js';
import { BossButton } from '../../../components/MyButton/MyButton.js';

import { useAdventure } from '../../../hooks/useUser';

import dragon from "../../../assets/dragon.png"

import "./RaidPage.css"
import "../../../styles/font.css"

function Success() {
    
    return (
      <div className="black_bg">
        <div className="raid-background-area">
            <img src={dragon} alt="Dragon" className="boss-image" />
        </div>

        <div className="raid-todo-list-area">
        <BossButton to="/boss">공격!</BossButton>
        </div>
      </div>
    );
}

export default Success;



import react from 'react';
import { Reward } from '../../Display/Reward.js';
import { BossButton } from '../../../components/MyButton/MyButton.js';

import { useAdventure } from '../../../hooks/useUser';


import "../../../styles/font.css"

function Success() {

    const { adventure } = useAdventure("");
    
    return (
      <div className="black_bg">
        <div className="raid-background-area">
          <h2 className="raid-text">Raid 1. {adventure}</h2>
          <Reward />
        </div>

        <div className="raid-todo-list-area">
        <BossButton to="/boss">보스전</BossButton>
        </div>
      </div>
    );
}

export default Success;



import react from 'react';

import { useAdventure } from '../../../hooks/useUser';
import {useReward} from '../../../hooks/useUser';

import "../../../styles/font.css"

function Success() {

    const { adventure} = useAdventure("");
    
    return (
        <div className="black_bg">
            <div className="raid-background-area">
                <h2 className="raid-text">Raid 1. {adventure}</h2>
            </div>
            
            <div className="raid-todo-list-area">
            </div>
        </div>
    );
}

export default Success;
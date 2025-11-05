//import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//라우터 데려오기

import TodoCheck from './components/pages/start/todo-enter-page.js';
import Starting from './components/pages/start/start-page.js';
import Targeting from "./components/pages/start/selecting-target-page.js";
import SelectReward from './components/pages/start/selecting-reward-page.js';
import Naming from './components/pages/start/naming-page.js';
import SelectAdventure from './components/pages/start/selecting-adventure.js';
import Loading from './components/pages/start/loading.js';
//페이지 파일


import {Provider} from "../src/contexts/provider.js"
//공용 변수 저장

function App() {
  //컴포넌트 정의

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Starting />} />
          <Route path="/name" element={<Naming />} />
          <Route path="/todo" element={<TodoCheck />} />
          <Route path="/target" element={<Targeting />} />
          <Route path="/select_reward" element={<SelectReward />} />
          <Route path="/select_adventure" element={<SelectAdventure />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
  );
}



export default App;

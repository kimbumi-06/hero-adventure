//import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//라우터 데려오기

import TodoCheck from './components/pages/start/checking-page.js';
//입력해둔 할일 다 띄우는 페이지
import Starting from './components/pages/start/start-page.js';
import Targeting from "./components/pages/start/selecting-target-page.js";
//할일 입력하는 페에지
import SelectReward from './components/pages/start/selecting-reward-page.js';
//달성보상 입력하는 페이지
import Naming from './components/pages/start/naming-page.js';
import SelectAdventure from './components/pages/start/selecting-adventure.js';
//주제 선택+입력하는 페이지? 대주제? 최종목표?
import Loading from './components/pages/start/loading.js';
//페이지 파일

import Raid from "./components/pages/ongoing/raid-page.js"
import Success from "./components/pages/ongoing/success-page.js"

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

        <Route path="/raid" element={<Raid />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}



export default App;

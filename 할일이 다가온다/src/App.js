//import './App.css';
import React, {useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//라우터 데려오기

import TodoEnter from './components/pages/start/todo-enter-page.js';
import Starting from './components/pages/start/start-page.js';
import Targeting from "./components/pages/start/selecting-target-page.js";
import Select_reward from './components/pages/start/selecting-reward-page.js';
import Naming from './components/pages/start/naming-page.js';



function App() {
  //컴포넌트 정의

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starting />} />
        <Route path="/name" element={<Naming />} />
        <Route path="/todo" element={<TodoEnter />} />
        <Route path="/target" element={<Targeting />} />
        <Route path="/select_reward" element={<Select_reward />} />
      </Routes>
    </Router>
  );
}



export default App;

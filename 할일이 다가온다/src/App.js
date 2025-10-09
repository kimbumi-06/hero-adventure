import './App.css';
import React, {useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//라우터 데려오기


import StartPage from './components/pages/start/start-page.js'; //페이지 컴포넌트 가져오기
import TodoEnter from './components/pages/start/todo-enter-page.js';
import Starting from './components/pages/start/start-page.js';
import Selecting from './components/pages/start/selecting-page.js';
import Naming from './components/pages/start/naming-page.js';



function App() {
  //컴포넌트 정의

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starting />} />
      </Routes>
    </Router>
  );
}



export default App;

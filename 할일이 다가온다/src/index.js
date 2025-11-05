import React from 'react';
import ReactDOM from 'react-dom/client'; //렌더링 담당
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-router-dom";
//router 만듦 -> npm install react-router-dom -> 페이지 구현 가능


import { Provider } from "../src/contexts/provider.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

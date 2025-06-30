import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App02 from './component App';
//import 는 외부 파일의 함수, 라이브러릴 사용할떄 
//           미리가져오기.(메모리 로드)

//App 은 화면을 구성하는 컴포넌트 이름
const root = ReactDOM.createRoot(document.getElementById('root'));
//App 컴포넌트에서 정의한 요소들은 createElement,appendChild 실행
// => root.rander() .리액트 최신버전은 React.StrictMode 를사용(개발과정 오류체크)
root.render(
  <React.StrictMode>
    <App />
    {/* 테스트용 */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//화면에서 확인 하기전에 컴포넌트를 테스트용 별도로 함수로 구현.
reportWebVitals();

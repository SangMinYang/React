import logo from './logo.svg'; //이미지 파일도 import 변수명 logo 로 지정 
import './App.css';

//Day1_01 JSX 문법 맛보기 
function App() {
  // 주석기호 (자바스크립트)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 주석기로 (jsx): JSX에서는 변수 ,수식 들을 작성할떄 {} 중괄호 안에 작성 합니다. */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// export :다른 외부 파일에서 App을 import 할수 있도록 설정 
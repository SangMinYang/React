import React from 'react'
import TwiceUL, { BtsUL } from './component/TestUL'
//export , defaulf 가 아닌 것은 표현식 기호 {함수이름} 형태로 import



//Day1_03" TestUL.jsx의 컴포넌트 2개를 화면에 출력하기 위한 부모컴포넌트를
           //ㄴ index.js 에서 App 컴포넌트로 동작합니다.
export default function App() {
  return (
    <div>App02
        <TwiceUL />
        <BtsUL />
    </div>
  )
}

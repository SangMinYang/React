//DAY2_01 : 이벤트 연습,useState 연습

import { useState } from "react"

export default function Wellcome() {
    //useState(상태변수의 초기값)
    //호출시 배열을 반환 : [현재 상태값 저장 변수ㅡ 상태를 변경하는 함수]
    //ㄴmesage 변수는 값을 변경하기 위해서 반드시 setMasage 메소드 사용해야람
    //  ㄴuseSate 로 선언된 변수는 상태변수 : getElementByid(''),textContent=값 비효율성 개선
  
    const [meseage, setMessage] = useState('Welcome!!')
    //호출시 배열을 반환 : [현재 상태값 저장 변수ㅡ 상태를 변경하는 함수]
    const [h3Color, setH3Color] = useState('green')
    //useState(상태변수의 초기값)
    function handleWelcome() {
        setMessage('환영합니다')
        //ㄴmessage 변수값 변경
        setH3Color('blue')
    }
    function handleEnter() {
      setMessage('입장합니다')
      setH3Color('Orange')
    }
    function handleOut() {
      setMessage('퇴장합니다')
      setH3Color('pink')
    }
    const h3Style = {
        color : h3Color
    }
    return (
    <div>
      
        {/* onClick : 해당 이벤트핸들러 함수를 지정 */}
        <button onClick={handleWelcome}>환영합니다</button>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleOut}>퇴장</button>
        
        <h2>{meseage}</h2>
        <h3 style={{color : h3Color}}>{meseage}</h3>
        <h4 style={h3Style}>{meseage}</h4>
    </div>
    
    )
}

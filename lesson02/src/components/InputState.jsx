//DAY2_03 : ,useState 연습 input 요소와 valul , onCjange 연습
import React, { useState } from 'react'

export default function InputState() {
    const [username, setUsername] =useState('홍길동')
    const [nickname, setNickname] =useState('GDhong')


    function handleOK(){
        alert(`${username} : ${nickname}`)
        setUsername('')
        setNickname('')
    }
//e 라는 변수는 발생한 인벤트를 저장하는 변수 
    function handleKeyDown(e){
        if (e.key === 'Enter') handleOK()
    }
  return (
    <div>
        <h3>input 에 State(상태) 변수 활용</h3>
        <p>input value 에 상태 변수를 적용하묜 onChange 이벤트를 꼭 필요 합니다.</p>
        <hr />
        <input type='text' placeholder='사용자 이름 입력하세요 '
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        />
        {/* e.target 은 이벤트를 일으킨 요소 */}
        <input type='text' placeholder='사용자 닉네임 입력하세요' value={nickname}
        onKeyDown={handleKeyDown}
        onChange={(e) => setNickname(e.target.value)}
        />
        {/*  */}
        <button onClick={handleOK}입력완료></button>
       <div>
        이름 : {username} , 닉네임 : {nickname}
       </div>
    </div>
  )
}

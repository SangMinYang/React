import React, { useState } from 'react'

////DAY2_04 :useState 연습 출력 오류 유효성 검사
const [error, setError] = useState('')
//입력값의 유효성 검사
function handleNumberInput(value){
    console.log(/^-?\d*\.?\d*$/.test(value), value)//정규식.test(값)
    if (/^-?\d*\.?\d*$/.test(value)) 
        setFirst(value)
        setError('유효하지 않은 입력입니다')
}
export default function 계산기() {
  return (
    <div className='container'>
        Calculator
    <h3>계산기</h3>
     <div style={{color:'red, fontSize: `0.8rem'}}></div>
        <input
        type='number' placeholder='첫번쨰 값을 입력하세요.'
        value={first}
        onChange={(e) =>setFirst(e.target.value)}
        onKeyUp={(e) => handleNumberInput(e.target.value)}
        />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleMull}>×</button>
        <button onClick={handleDiv}>÷</button>
        <input
        type="number" placeholder='두번쨰 값을 입력하세요.'
        value={second}// second 0일떄 Infinity()=>유효성 검사가 필요 
                      //first 0일떄 0
                      //if(Number(second))!==0 && valdation(first) && valdation(second)){
                      //set Rusult(Number )}
        onChange={(e) =>setSecond(e.target.value)}
        />
   
    </div>
    
  )
}

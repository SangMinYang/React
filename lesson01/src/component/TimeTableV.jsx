//Day2_01 객체 데이터 props 연습
// {scheduls} 는 {scheduls : scheduls} 생략된 객체
// 그리고 scheduls 가 참조하는 데이터 객체
import React from 'react'
import '../css/TimeTableH.css'
export default function TimeTableV({scheduls}) {
  return (

<div>
    <h3>2025.07.01(Day2)시간표
        <table>
            <thead>
                <tr>
                    <td className='theading'>TIME</td>
                    <td className='theading'>TODO</td>
                </tr>

        </thead>
        <tbody>
            {//item 에저장된 데이터 예시 :{time: '09:00', todo: '수업'}
                scheduls.map((item,idx) => (
                <tr key={idx}>
                    <td className='tdata'>{item.timd} </td>
                    <td className='tdata'>{item.todo}</td>
                 </tr>   
                ))
            }
        </tbody>
        </table>
    </h3>
</div>





) } 
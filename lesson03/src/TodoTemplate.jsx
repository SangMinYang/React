import React from 'react'
import TodoInsert from './component/TodoInsert'
import TodoList from './component/TodoList'
import './assets/css/TodoTemplate.scss'


//children 리엑트에서 자식 컴포넌트를 전달 할떄 사용하는 미리정해진 props 
//받을떄만 사용하면 됩니다 
// App.jsx에서  이 예제는 TodoInsert,TodoList 컴포넌트가 자식 컴포넌트 
export default function TodoTemplate( {children }) {
  return (
    <div className='TodoTemplate'>
    <div className='app-title'>일정관리</div>
    <div className='content'>{children}</div>
     </div> 
 )}

 

import TodoListItem from './TodoListItem.jsx'
//부모 컴포넌트 에서 전달 받는 props : todos, onRemove, onChecked
export default function TodoList({todos, onRemove, onChecked}) {
  return (<div className='TodoList'>
    {
     todos.map((item,idx) =>
    <TodoListItem 
      key={idx}
     todo={item} 
     //todos 배열 요소 item 을 자식요소에게 전당 (속성 이름 todo)
     onRemove={onRemove} 
     onChecked={onChecked}
     />)
  }
  </div>
    
  )
}

import { useState } from 'react'
import '../assets/css/TodoInsert.scss'
import { MdAdd } from 'react-icons/md'
export default function TodoInsert({onInsert}) {
    const [value, setValue] = useState('') 

    //🎉이벤트 함수 
    const handleSubmit = (e) => {
    e.preventDefault(); // form 서버 제출 기본 동작을 못하게 막음.
    // 입력값을 할일 목록(배열)에 추가시키는 함수 실행하기
    //새로운 할일 입력값 value 는 상태변수 
    onInsert(value);
    setValue("");
  };

  return (
    <form className="TodoInsert" onSubmit={handleSubmit}> 
                <input
                  placeholder="할 일을 입력하세요."
                  value={value}// 상태변수 한쌍으로 사용
                  onChange={(e) => setValue(e.target.value)}
                />
                {/* type="submit" 버튼 클릭은 onSubmit이벤트 발생 =>form 태그 handleSubmit 함수 실행 */}
                <button type="submit">
                  <MdAdd />
                </button>
  </form>

  )
              
}

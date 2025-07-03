import { useRef, useState ,EffectAndRef,PreviousValue } from 'react'
//Day4_02 : useRef, useEffect 테스트
//          useRef는 input 요소에 사용 또는 단독을 이전값 사용을 위해서 정의
export  function FocusInput() {
    // default 안쓰면 import {}중괄호 안에 사용

 //컴포넌트 
  
    const inputRef = useRef(null); 
    //🔥참조요소의 값이 바뀌어도 제랜더링 안함 .nickname 재렌더링할떄 이전값유지
    const [nickname, setNickname] = useState('')
    //값이 바뀔떄 랜더링 다시함
     const handleFocus = () => {// 이벤트 함수 

    inputRef.current.focus() // DOM 요소에 직접 접근(getElementByid 동일한 동작)
   
    inputRef.current.value = '테스트 중입니다.'
     }
      //🔥주의 ㅣ inputRef 는 DOM 요소가 만들어진 후에 참조.
    //       ㄴ이코드 위치는 DOM 요소가 만들어지기전에 실행되고 오류발생
     console.log('이름',inputRef.current && inputRef.current.value)
   
  return (
    <>
    {/* DOM 요소에 직접 접근(getElementByid 동일한 동작)*useRef() 선언  */}
        <input ref={inputRef} type='text' placeholder='이름을 입력하세요.' />
        <button onClick={handleFocus}>포커스이동</button>
        <hr/>
        <input value={nickname}
         placeholder='닉네임을 입력하세요' 
         onChange={(e) =>
            setNickname(e.target.value)
            //값이 변경될떄 발생하는 이벤트 
        }/>
        <div>닉네임 : {nickname}</div>
        </>
  )
   
}

export function EffectAndRef() {
  // 컴포넌트
  const inputRef = useRef(null)
  const [nickname, setNickname] = useState('') // 🔥 값이 바뀔때, 렌더링 다시함.

  const handleFocus = () => {
    inputRef.current.focus()
    inputRef.current.value = '테스트 중입니다.'
  }

  // useEffect(콜백함수, 의존성 배열) :
  //   의존성 배열 [상태변수, ]  : 배열에 포함된 상태 값이 바뀔 때마다 콜백함수 실행
  //   빈 배열  [] : 처음 한번 Component 가 마운트 될 때만 실행
  //   2번째 인자  없음 : 재 렌더링 될 때 , 항상 실행
  useEffect(() => {
    console.log('이름: ', inputRef.current.value) //useRef 는 current 속성으로 요소에 접근
  })

  return (
    <>
      <input ref={inputRef} type='text' placeholder='이름을 입력하세요.' />
      <button onClick={handleFocus}>포커스 이동</button>
      <hr />
      <input
        value={nickname}
        placeholder='닉네임을 입력하세요.'
        onChange={(e) => setNickname(e.target.value)}
      />
      <div>닉네임 : {nickname}</div>
    </>
  )
}
export function PreviousValue() {
    //input 과 연결 하지않고 사용 하는 예시(value 속성 안씀)
  const [count, setCount] = useState(0)
  const prevCount = useRef(0)

  useEffect(() => {
    //useRef 로 만들어진 변수는 객체 (.current 속성으로 값 설정.)
    prevCount.current = count //랜더링 한 다음에 값표현
  }, [count])// count 가 바뀔떄마다 콜백함수 실행. [] 로바꾸면 마운트할떄 한번만 실행

  return (
    <div>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCount.current}</p>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
    </div>
  )
}

//Day1_07 : TimeTableH 의 부모 컴포넌트
//자식 컴포넌트 TimeTableH 2개의 배열을 전달해야함.


import TimeTableV from "./TimeTableV"
import TimeTableH from "./TimeTableH"
import TimeTableH_2 from "./TimeTableH_2"
export default function App() {
    const time = ['09:00','11:00','12:30','14:00','16:45',]
    const todo = ['수업','과제','점심식사','주간회의','자료조사',]

   //객체의 배열
   const schuduls = [
    {time:'09:00',todo:'수업'},
    {time:'11:00',todo:'과제'},
    {time:'12:30',todo:'점심식사'},
    {time:'14:00',todo:'주간회의'},
    {time:'16:45',todo:'자료조사'}
    
   ]

  return (
    <div>
        {/* time,todo,tile 속성은 객체 형태로 자식 컴포넌트에게 전달
        자식 1 : 함수 인자로 객체를 분해하여 각속성 변수 선언 */}
         <TimeTableH time={time} todo={todo} title={'첫번째 테이블'}/>
         {/* 자식2:함수 인자로 객체를 저장할 변수선언 */}
         <TimeTableH_2 time={time} todo={todo} title={'두번째 테이블'}/>
         <hr />
         {/* 객체의 배열을 자식 컴포넌트 한테 전달 props(프로퍼티 속성 ) */}
         <TimeTableV scheduls={scheduls}/>
         
    </div>
    
       
    
  )
}

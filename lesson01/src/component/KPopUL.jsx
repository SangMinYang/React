
//Day1_04 데이터를 전달 받아 컴포넌트 에서 사용하기
//

//부모 컴포넌트  
export default function KPopUL({members, title}) {
    //객체로 저장된 스타일값 정의.적용은 style 속성에서 합니다
    const titleStyle = {
      color: "blue",
      boder: "1px solid gray",
    }
  return (
    <div>
        <h3>{title}</h3>
        <ul>
            {members.map((item, idx) => (
        <li key={idx}>{item}</li>
            
            ))}
            {/* jsx는 태그안에 js 코드 쓸떄 꼭 중괄호 안에 씁니다. */}

        </ul>
    </div>
  );
}
//위에 코드에서  KPopUL({members}) 와같이 함수에 입력값(인자) 있습니다.부모 컴포넌트 주는값
               //ㄴ{members} 는 {memebers:memebers} 속성이름:값변수 를 줄여서 씁니다
//배열값이 ['나나','미미', 모모]일떄 item ='나나',idx=0/item ='미미',idx=1/item ='모모',idx=2/
//배열.map(fuction(item,idx){
//    return 실행내용
//함수내용 (실행코드)
//배열의 요소를 하나씩 가져다가 값을 item , 인덱스번호는 idx 저장함
//item , idx 값으로 함수내용을 실행한 return 결과로 새로운 배열이 만들어 집니다.
//})
//화살표 함수로 바꾸면
//1)배열.map((item,indx) =>{
    // retun 실행 내용})
    //2)배열.map((item,idx) => (실험내용))
    //                           ㄴ return 생략하는 형식(암묵적 반환)
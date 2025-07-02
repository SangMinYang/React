console.log("Day03_자바스크립트 문법 테스트")

const numbers1 =[45, 4,9,16,25]
//2.filter, 메소드
const over15 = numbers1.filter(myFuction2)  

//filter 메소드 : return 의 식이 참 , 거짓 결과값
function myFuction2(value){
    return value > 15 
    //참이 되는 값만 가져가서 새로운 배열 만들기
}
console.log('filter-over15', over15)
//화살표 함수로 변형식
const under15 = numbers1.filter((value) => (value <= 15))//15이하 필터링

console.log('filter-under15', under15)



let sum = numbers1.reduce(myFuction3)
//3.reduce 메소드 : 배열의 각요소값을 순서대로 실행한 수식 결과로 한개의 값

//첫번쨰 인자 : 각 요소의 연산 결과를 저장 하는 변수가 필요
function myFuction3(total, value){//초기 값은 0 ,''
  return total + value
  //0 + 45 = 45 +4 =49,49+9=58 58+16=74,74+25='99'=> 최종적인 메소드 경과값 
}
console.log('reduce sum', sum)


//1. map 메소드 test
// map 메소드는 새로운 배열을 만듭니다.
// ㄴnumbers1 배열을 조작 (각 요소값으로 연산-콜백함수 리턴) 한 결과 

const numbers2 = numbers1.map(myFuction)
//value = numbers1 배열의 각각 요소값.요소의 값만 사용할때 인자는 1개
function myFuction(value){
    return value*2
}

//콜백함수를 화살표 함수로 바꾸기.예시 요소의값과 인덱스를 콜백함수로 입력(인자)

const number3 = numbers1.map((value,idx) => (value*2 + idx))

console.log('numbers2', numbers2.toString())
console.log('numbers3', number3.toString())


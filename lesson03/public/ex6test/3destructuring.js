//비구조화, 구조분해
//배열 또는 객체를 분해 -함수 등 값을 전달할때 사용

const sana = {name: '사나' , age:23,address:'경기'}

function print1(objvalue){
    console.log('print1 함수 실행----')
    console.log(objvalue.name)
    console.log(objvalue.age)
    console.log(objvalue.address)

}


function print2({age,name,addr}){  //{속성 이름1 ,속성이름2.....}=> 속성 순서 무관 
    console.log('print2 함수 실행----')
    console.log(name)
    console.log(age)
    console.log(addr) //없는 속성 이름 : Undefined
    
} 

function print3({address}){ //필요한 속성만 가져오기 
    console.log('prin3 함수 실행----')
    console.log(address)
}

function print4({address : addr}){ //address 속성 값을 addr 변수에 저장
    console.log('prin3 함수 실행----')
    console.log(address) //address 변수 선언 없으므로 오류 <없는 속성은 Undefined>
}
print1(sana)
print2(sana)
print3(sana)
print4(sana)
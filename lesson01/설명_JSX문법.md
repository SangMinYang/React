JSX(JavaScript XML)는 React에서 UI를 선언적으로 표현할 수 있게 해주는 문법 확장입니다. HTML과 유사하지만 JavaScript 안에서 동작하며 약간 다른 규칙이 있습니다. 주요 문법과 특징을 아래에 정리합니다.

✅ 1. JSX 기본 구조

```jsx
const element = <h1>Hello, world!</h1>;
```

- HTML과 유사하지만 JavaScript 코드 안에서 사용됨
- babel이 JSX를 React.createElement()로 변환

✅ 2. 하나의 부모 요소만 리턴

```jsx
function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
```

- 컴포넌트는 반드시 하나의 루트 요소를 반환해야 함
- 여러 요소를 반환하려면 <div> 또는 <></>로 감싸야 함

✅ 3. JavaScript 표현식(수식/메소드 사용) 사용 ({} 중괄호)

```jsx
const name = "샘";
const element = <h1>Hello, {name}!</h1>;
```

- JSX 안에서는 중괄호 {}로 JavaScript 표현식 사용 가능
- 조건식, 함수 호출, 변수 등 삽입 가능

✅ 4. class → className, for → htmlFor

```jsx
return (
  <div className="box" htmlFor="inputId">
    내용
  </div>
);
```

- HTML 속성과는 다르게 설정함
- class → className , for(label 태그 속성) → htmlFor

✅ 5. 조건부 렌더링

```jsx
{//삼황연산
  isLoggedIn ? <Logout /> ://(콜론) <Login />; // if (isLoggedIn)
                                            //<Logout />
                                            //else
                                            //<Login />
}
```

또는

```jsx
{
  isAdmin && <AdminPanel />; // 
}
```

- JSX 안에서 삼항 연산자 또는 &&를 사용하여 조건부 렌더링 가능

✅ 6. 스타일 적용 방식

```jsx               
const divStyle = { color: "blue", fontSize: "16px" };

return <div style={divStyle}>Styled Text</div>;
```
//스타일을 정의한 내용을 하나의 객체로 다룹니다
- style은 객체 형태로 작성 (camelCase 사용-fontsize는 원래CSS에서 font-size)

✅ 7. 배열/리스트 렌더링

```jsx
const fruits = ["apple", "banana", "cherry"];
return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

- JSX 안에서 .map() 사용 가능.많이쓰는 배열 메소드(filter-조건문-, reduce-연산 누적)
- !!!!!!반복 요소에는 반드시 key 속성 필요.예시:반복요소는 li,td(ket값)
-key 로 지정한 값은 중복이 없어야함 

✅ 8. 주석 사용 방법

```jsx
return (
  <div>
    {/* 이건 주석입니다 */}
    <p>Hello</p>
  </div>
);
```

✅ 9. Fragment (<></>)

```jsx
return (
  <>
    <Header />
    <Content />
  </>
);
```

- 불필요한 <div> 없이 여러 요소를 그룹화
- <React.Fragment> 또는 축약형 <></> 사용

✅ 10. 컴포넌트 사용
-예전 문법은 클래스형 컴포넌트는 지금은 거의 사용하지 않는다.
```jsx
// 정의 : 함수형 컴포넌트
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx
<Welcome name="샘" />
const element =<h1>Helo

```

- 대문자로 시작하는 태그는 사용자 정의 컴포넌트로 인식됨
- props를 통해 데이터 전달 : 부모 멐포넌트가 자식 컴포넌트 에게 데이터 전달 할떄
   ㄴ컴포넌트가 계층 구조로 사용됨에 따라 필요.

✅ 11. 이벤트 속성

```jsx
<button onClick={handleClick}>클릭</button>
```

- onClick, onChange 등 DOM 이벤트는 camelCase로 작성
- '이벤트 핸들러'는 함수 참조 또는 람다식(화살표 함수 ) 사용 가능

✅ 참고: JSX는 결국 JS

```jsx
const element = <h1>Hello, world!</h1>;
```

는 다음 코드로 변환됨:

```js
const element = React.createElement("h1", null, "Hello, world!");
```

```
// open settings
"javascript.updateImportsOnFileMove.enabled": "always"
```

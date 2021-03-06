import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';
import ManyInputSample from './ManyInputSample';
import UserList from './UserList';


function App() {
  // JSX 가 어떻게 쓰이는지 보여주기 위해 내부에 선언된 변수
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,  // 기본 단위 px
    padding: '1rem'  // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <div>
      <Hello />
      <Hello />
      <Hello  // 열리는 태그에서는 주석을 이렇게도 작성할 수 있다.
      />

      {/* JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여줍니다. */}
      <div>name</div>
      <div>{name}</div>
      {/* 내부에서 선언한 style 적용하기 */}
      <div style={style}>{name}</div>
      {/* 외부에서 선언한 스타일을 className 을 이용하여 적용하기 */}
      <div className="gray-box"></div>

      {/* props 활용하기 */}
      <Hello name="React!" color="red"/>
      <Hello color="pink"/>
        
      {/* Wrappper 로 자식 요소(child) 감싸기 */}
      <Wrapper>        
        <Hello name="react" color="red"/>
        <Hello color="pink"/>

        {/* 조건에 따른 랜더링, isSpecial만 넣어주어도 isSpecial={true}와 동일하다. */}
        <Hello name="react" color="red" isSpecial={true}/>
      </Wrapper>

      {/* useState 를 사용한 컴포넌트에서 바뀌는 값 관리하기 */}
      <Counter />

      {/* input 상태 관리하기 */}
      <InputSample />

      <ManyInputSample />

      <UserList />

    </div>
  );
}

export default App;
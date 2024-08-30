import { useState } from "react";

const HookUseState = () => {
  /* Hook useState
        컴포넌트의 상태 관리 및 상태 변경할 수 있게 도와주는 훅
        
        const [state: 현재 상태, setState: 상태업데이트 함수] = useState(초깃값) 
        -setState : 비동기함수 

        상태(state)가 변경되면
        React는 해당 컴포넌트를 리렌더링하여 브라우저에 새로운 ui 그림
        단, 이전상태와 비교하여 필요한 부분만 업데이트

        렌더링에 영향을 주는 건 상태값의 변화(useState 역할)
    */
  console.log("=================> rendering <===================");
  //useState 사용하지 않은 변수들은 값이 변경되어도 렌더링(화면에 다시 그려내기)이 되지 않음
  let letNum = 0;

  //letNum 1씩 상승
  const letNumUpdate = () => {
    letNum++;
    console.log(letNum);
  };
  //앞에있는건 변경되는 변수. 뒤에는 앞의 변수랑 이름 맞춰서 카멜케이스로 작성
  const [count, setCount] = useState(0);
  //setter 함수는 비동기처리이기에 바로 즉각 적용 아님
  //다음 렌더링 사이클에서 그 값으로 업데이트 예약한다는 의미
  const countUpdate = () => {
    setCount(count + 1);
    console.log(count);
  };

  //setter함수 통해 값을 업데이트 할 때, 값이 이전값과 비교해서 달라진게 없음 >> 렌더링 안함
  const countDown = () => {
    setCount(count - 1 < 0 ? 0 : count - 1);
    //값이 바뀌어야만 렌더링이됨. count가 0이 된 이후 다시 down을 누르면 상태가 변하지 않았기 떄문에 렌더링 안됨
  };

  const [score, setScore] = useState(0);
  const scoreUP = () => {
    setScore(score + 5 > 100 ? 100 : score + 5);
  };
  const scoreDown = () => {
    setScore(score - 5 < 0 ? 0 : score - 5);
  };

  /* 이름관리 */
  const [list, setList] = useState([]); //이름목록
  const [name, setName] = useState(""); //입력받은 이름
  //이벤트 객체가 파라미터로 넘어온다
  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };
  const goAddName = () => {
    console.log(name);
    console.log(...list); //배열안에 있는 것들 풀어서 반환
    setList([...list, name]);
  };
  return (
    <div>
      <p> letNum값 : {letNum}</p>
      <button onClick={letNumUpdate}>letNum+</button>
      <p> count값 : {count}</p>
      <button onClick={countUpdate}>CountNum+</button>
      <button onClick={countDown}>CountNum-</button>

      <p>현재점수: {score} </p>
      <button
        onClick={() => {
          setScore(score + 5 > 100 ? 100 : score + 5);
        }}
      >
        점수+
      </button>
      <button
        onClick={() => {
          setScore(score - 5 < 0 ? 0 : score - 5);
        }}
      >
        점수-
      </button>
      <p>이름을 입력하세요</p>

      <input type={"text"} onChange={nameOnChangeHandler} />
      <button onClick={goAddName}>이름추가</button>

      <p>이름 목록출력</p>
      {list.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </div>
  );
};

export default HookUseState;
//input 태그는 무조건 온체인지

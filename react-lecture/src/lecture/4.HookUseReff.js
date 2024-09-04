import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  /* useRef
    cosnt ref=useRef(초깃값) --ref객체생성 = {current: 초깃값}
   1) 값의 유지(영속성) -- 렌더링에 영향을 받지 않음
   2) dom 요소 조작
*/
  console.log("=====>렌더링<=====");
  let countVar = 0;
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [userId, setUserId] = useState("");
  //   const [userList, setuserList] = useRef([]);
  const userIdOnChangehandler = (e) => {
    setUserId(e.target.value);
  };
  const check = "user123";
  const btnRef = useRef();
  const inputRef = useRef();
  const goLogin = () => {
    if (userId == check) {
      alert("로그인 완료");
    } else {
      //아이디찾기 배경컬러 바꾸기
      btnRef.current.style.backgroundColor = "skyblue";
    }
  };
  const goSearch = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  return (
    <>
      <p>countVar: {countVar}</p>
      <p>count: {count}</p>
      <p>countRef: {countRef.current}</p>
      <button
        onClick={() => {
          countVar++;
          console.log(countVar);
        }}
      >
        countVar+
      </button>
      <button onClick={() => setCount(count + 1)}>count+</button>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        countRef+
      </button>
      <br />
      <br />
      <input
        ref={inputRef}
        className="border"
        type="text"
        onChange={userIdOnChangehandler}
      />
      <button className="border" onClick={goLogin}>
        로그인하기
      </button>
      <button ref={btnRef} onClick={goSearch}>
        아이디찾기
      </button>
    </>
  );
};
export default HookUseRef;

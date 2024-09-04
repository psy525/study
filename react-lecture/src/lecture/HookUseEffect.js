import { useEffect, useState } from "react";

const HookUseEffect = () => {
  /* Hook UseEffect
     렌더링 때마다 특정작업을 수행하도록 도와주는 훅
     
     mount(첫 렌더링): 컴포넌트가 dom에 삽입되고 화면에 보이는 상태 
     unmount(사라짐): 컴포넌트가 dom에서 제거되고 화면에 보이지 않는 상태
     update(재렌더링): 

     useEffect(()=>{}, [dependency array])
  */
  console.log("======>렌더링<=====");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]); //이름목록담기

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const addName = () => {
    setList([...list, name]);
    setName("");
  };

  useEffect(() => {
    console.log("매번 렌더링");
  });

  useEffect(() => {
    /* 초기화, 세션체크, 로그인체크 등 */
    console.log("처음에만 렌더링");
  }, []);

  useEffect(() => {
    console.log("useEffect는 작성순서대로 실행");
  }, []);

  useEffect(() => {
    console.log("count 상태 바뀜", count);
  }, [count]); //[의존성배열]의 값이 바뀌었을때 로직실행

  useEffect(() => {
    console.log("name 상태바뀜", name);
  }, [name]);

  //이름 리스트
  useEffect(() => {
    console.log("list 상태변화");
  }, [list]);

  useEffect(() => {
    console.log("둘 중 하나라도 바뀌면 바뀜");
  }, [count, name]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count+</button>
      {/* <input className="border" type="text" onChange={nameOnChangeHandler} /> */}
      <input
        className="border"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" onClick={addName}>
        이름추가
      </button>
      {list.map((v, i) => {
        return <div key={i}>{v}</div>;
      })}
    </div>
  );
};
export default HookUseEffect;

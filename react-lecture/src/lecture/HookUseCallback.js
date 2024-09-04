import { useCallback, useEffect, useState } from "react";

const HookUseCallback = () => {
  /*복습*/
  //처리방식: 동기처리, 비동기처리
  /* useState: 상태관리훅 >> setter(set함수) : 비동기 값을 가상돔에 저장해두고, 값이 달라졌을 때 렌더링시 바꿔주는거
       useEffect: (상태)값이 변경되었을 때 함수실행 
       useRef: 1) 값의 유지 2) Dom 조작 : 포커싱 보낼때 많이 사용
    */

  /*  useCallback
        
        useCallback(()=>{},[defendency arry])
        인자로 전달한 콜백함수 자체를 메모리제이션 하는 것
        (함수가 필요시마다 다시 만드는 것(주소시자 재생성되는 것)이 아니라 메모리에서 가져와서 사용)
        
        const test=함수; //test라는 변수에 함수가 할당(주소지 할당)
        렌더링 발생 >> 컴포넌트 함수 호출 >> 모든 내부 변수 초기화
        렌더링시마다 새로 만들어진 함수객체를 할당 받음

    */
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  /* 기본함수 */
  const basicFunction = () => {
    console.log("basicFunction");
  };
  useEffect(() => {
    console.log("basicFunction 주소변경");
  }, [basicFunction]); //함수객체변경(주소값변경)시마다

  /* useCallback 이용한 함수 */
  // [] - 처음 한번만 객체 생성
  const useCallbackFunction = useCallback(() => {
    console.log("num의 값:", num);
    console.log("useCallbackFunction");
  }, []);

  useEffect(() => {
    console.log("uesCallbackFunction 주소변경");
  }, [useCallbackFunction]);

  // [값, 변수 ...] - 디펜던시 존재시 해당 값이 변경될 때마다 객체 생성
  const useCallbackFunction2 = useCallback(() => {
    console.log("useCallbackFunction2 adfasdf");
  }, [num]);

  useEffect(() => {
    console.log("useCallbackFunction2주소변경");
  }, [useCallbackFunction2]);

  const useCallbackFunction3 = useCallback(() => {
    console.log("2변경");
  }, [num2]);
  //   useEffect(() => {
  //     console.log("2값 변경시 주소지 변경");
  //   }, [
  //     useCallback(() => {
  //       console.log("2변경");
  //     }, [num2]),
  //   ]);
  useEffect(() => {
    console.log("useCallbackFunction3 주소변경");
  }, [useCallbackFunction3]);

  const [name, setName] = useState("");
  const nameOnChangeHandeler = useCallback((e) => {
    setName(e.target.value);
  });

  useEffect(() => {
    console.log("nameOnChangeHandeler 주소변경");
  }, [nameOnChangeHandeler]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <p>num: {num}</p>
      <button onClick={() => setNum(num + 1)}>num 상승</button>
      <br />
      <p>num2:{num2}</p>
      <button onClick={() => setNum2(num2 + 1)}>num 상승</button>
      <button onClick={useCallbackFunction}>값출력</button>
      <input type="text" onChange={nameOnChangeHandeler} />
    </div>
  );
};
export default HookUseCallback;

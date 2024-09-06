import { useEffect, useState } from "react";

const CleanupTimer = () => {
  /*  함수형 업데이트 방식
        이전 상태값을 기반으로 새로운 상태값을 업데이트하는 것을 보장
        상태 업데이트 > 비동기처리
        이전 상태 값을 바탕으로 업데이트 수행하는 것이 안전
    set함수((prev: 이전값)=>{return 값})
    */
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("타이머살아있음");
    }, 1000);
    //useEffect의 return은 cleanup 작업영역
    return () => {
      console.log("타이머정리");
      clearInterval(timer);
    };
  }, []);
  return <>{seconds}나 타이머</>;
};
export default CleanupTimer;

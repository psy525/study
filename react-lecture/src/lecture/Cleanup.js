import { useState } from "react";
import CleanupTimer from "./CleanupTimer";

const Cleanup = () => {
  /* cleanup 작업: useEffect 훅에서 발생
       컴포넌트의 생명주기와 관련된 작업을 수행할 때 사용함
       (ex. 리소스 해제, 이벤트 처리 등ㅁ)
    */
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        타이머 보이기
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        타이머 숨기기
      </button>
      {show ? <CleanupTimer /> : null}
    </div>
  );
};
export default Cleanup;

import { useCallback, useEffect, useRef, useState } from "react";

const SignupTimer2 = ({ init, onClose }) => {
  // console.log(init);
  /* 타이머생성 */
  const [seconds, setSeconds] = useState(init || 100);
  // const timerRef = useRef(null); //{current:null}

  useEffect(() => {
    // timerRef.current = setInterval(() => {
    const timer = setInterval(() => {
      console.log("타미머살아있음");
      setSeconds((prev) => prev - 1);
    }, 1000);

    /* cleanUp 작업: 언마운트 됐을 때 불필요한 것들을 제거 */
    return () => {
      console.log("타이머정리됨");
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      // console.log(timerRef);
      onClose({ success: false });
      // clearInterval(timerRef.current);
    }
  }, [seconds]);

  const [inputCode, setInputCode] = useState("");
  const inputCodeOnChangeHandler = useCallback((e) => {
    setInputCode(e.target.value);
  }, []);

  /* 인증번호코드확인 */
  const goCheckCode = () => {
    const localCode = localStorage.getItem("code");
    if (localCode == inputCode) {
      onClose({ success: true }); //컴포넌트닫기
    } else {
      alert("불일치");
    }
  };

  /* 분초 포맷팅함수 */
  const timeFormatter = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}: ${sec}`;
  };
  return (
    <div className="md:col-span-5">
      <input
        type="text"
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        value={inputCode}
        onChange={inputCodeOnChangeHandler}
        style={{ width: "35%" }}
      />
      <input
        type="text"
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 ml-2"
        value={timeFormatter(seconds)}
        style={{ width: "35%" }}
        readOnly
        disabled
      />
      <button
        className="btn bg-orange-700 ml-2 w-20 h-10"
        onClick={goCheckCode}
      >
        확인
      </button>
    </div>
  );
};
export default SignupTimer2;

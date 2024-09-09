import { useEffect, useRef, useState } from "react";

const SignupTimer = ({ close }) => {
  //필요한거
  const [userCode, setUserCode] = useState(""); // 입력한 코드값
  const [seconds, setSeconds] = useState(1); //타이머 시간
  const [timerMin, setTimerMin] = useState(1);
  const [timerSecond, setTimerSecond] = useState(0);
  const inputCodeRef = useRef();

  //2.타이머 작동
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timer);
          alert("시간이 초과되었습니다.");
          close({ codeConfirm: false });
          inputCodeRef.current.disabled = true;
          return 0;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 초를 분과 초로 나누어 계산
  useEffect(() => {
    setTimerMin(Math.floor(seconds / 60));
    setTimerSecond(seconds % 60);
  }, [seconds]);

  //타이머 작동 중에 다시 이메일 전송버튼을 눌렀을 경우 emailCheck=true로 해서 넘겨주기

  // 2.  확인 누르면 닫히기 close넘기기
  const codeCheck = () => {
    const code = localStorage.getItem("code");
    if (userCode == code) {
      alert("인증이 완료되었습니다.");
      close({ codeConfirm: true });
    } else {
      alert("인증번호가 틀렸습니다.");
      close({ codeConfirm: false });
    }
  };

  return (
    <div className="flex">
      <div className="md:col-span-1 block">
        <label for="code">인증번호</label>
        <input
          type="text"
          name="code"
          id="code"
          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-80 bg-gray-50"
          placeholder="인증번호입력"
          value={userCode}
          style={{ marginRight: "10px" }}
          onChange={(e) => {
            setUserCode(e.target.value);
          }}
          ref={inputCodeRef}
        />
      </div>
      <div className="md:col-span-1 flex">
        <label className="block" for="zipcode">
          timer
          <div className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-80 bg-gray-50">
            {timerMin}:{timerSecond < 10 ? `0${timerSecond}` : timerSecond}
          </div>
        </label>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
          style={{ marginTop: "22px", marginLeft: "10px" }}
          onClick={codeCheck}
        >
          확인
        </button>
      </div>
    </div>
  );
};
export default SignupTimer;

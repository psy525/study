import { useCallback, useState } from "react";
// import "../Codpen.css";

const HookUseCallbackM = () => {
  /* 변수 */
  const [userId, setUserId] = useState(""); // 아이디
  const [userPw, setUserPw] = useState(""); // 비밀번호
  const [userPwConfirm, setUserPwConfirm] = useState(""); // 비밀번호확인
  const [userPhone, setUserPhone] = useState(""); // 전화번호
  const [userName, setUserName] = useState(""); //이름
  const [userBirth, setUserBirth] = useState(""); //생년월일
  const [isPwConfirm, setIsPwConfirm] = useState(false); //비밀번호확인여부
  /* 입력요소핸들러 */
  //공백을 제거하는 함수
  const removeSpace = (param) => param.replace(/\s+/g, "");
  const userIdOnChangeHandler = useCallback((e) => {
    setUserId(removeSpace(e.target.value));
  }, []);
  const userPwOnChangeHandler = useCallback((e) => {
    setIsPwConfirm(false);
    setUserPw(removeSpace(e.target.value));
  }, []);
  const userPwConfirmOnChangeHandler = useCallback((e) => {
    setUserPwConfirm(removeSpace(e.target.value));
  }, []);
  const userPhoneOnChangeHandler = useCallback((e) => {
    setUserPhone(e.target.value);
  }, []);
  const userNameOnChangeHandler = useCallback((e) => {
    setUserName(e.target.value);
  }, []);
  const userBirthOnChangeHandler = useCallback((e) => {
    setUserBirth(e.target.value);
  }, []);

  /* 비밀번호 확인*/
  const goConfirm = () => {
    if (!userPw) {
      alert("비밀번호를 입력하세요");
      return;
    }
    if (!userPwConfirm) {
      alert("비밀번호 확인 입력하세요.");
      return;
    }
    if (userPw == userPwConfirm) {
      alert("비밀번호가 확인되었습니다");
      setIsPwConfirm(true);
    } else {
      alert("비밀번호 확인 실패입니다");
      setIsPwConfirm(false);
    }
  };

  /*유효성 검사*/
  const validationCheck = () => {
    if (!userId) {
      alert("아이디 입력하세요");
      return false;
    }
    if (!userPw) {
      alert("비번 입력하세요");
      return false;
    }
    //생년월일 8자리
    const birtgDataPattern = /^\d{8}$/;
    console.log(birtgDataPattern.test(userBirth));
    if (!birtgDataPattern.test(userBirth)) {
      alert("생년월일은 8자리입니다");
      return false;
    }
    return true;
  };

  /* 회원가입요청 */
  const goSign = () => {
    //유효성검사
    const res = validationCheck();
    if (!res) return;

    //비밀번호확인여부체크
    if (isPwConfirm) {
      const info = {
        id: userId,
        pw: userPw,
        phone: userPhone,
        name: userName,
        birth: userBirth,
      };
      console.log(info);
    } else {
      alert("비밀번호 확인 먼저하세요.");
    }
  };

  return (
    <section className="w-full mb-0">
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-align-justify"
        >
          <line x1="21" y1="10" x2="3" y2="10" />
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="21" y1="14" x2="3" y2="14" />
          <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
        회원가입
      </h1>
      <p>회원가입을 위한 정보를 입력해주세요.</p>

      <div className="nice-form-group">
        <label>아이디</label>
        <input
          type="text"
          placeholder="Your Id"
          value={userId}
          onChange={userIdOnChangeHandler}
        />
      </div>

      <div className="nice-form-group">
        <label>비밀번호</label>
        <input
          type="password"
          placeholder="Your Pw"
          value={userPw}
          onChange={userPwOnChangeHandler}
        />
      </div>

      <div className="nice-form-group">
        <label>비밀번호 확인</label>
        <input
          type="password"
          placeholder="Your Pw Confirm"
          value={userPwConfirm}
          onChange={userPwConfirmOnChangeHandler}
          style={{ width: "70%" }}
          disabled={isPwConfirm ? true : false}
        />
        <button
          className="bg-blue-950 inline-block ml-2 text-white"
          style={{ width: "25%", height: "2.5rem" }}
          onClick={goConfirm}
        >
          확인
        </button>
      </div>

      <div className="nice-form-group">
        <label>전화번호</label>
        <input
          type="tel"
          placeholder="Your Tel"
          value={userPhone}
          onChange={userPhoneOnChangeHandler}
        />
      </div>

      <div className="nice-form-group">
        <label>이름</label>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={userNameOnChangeHandler}
        />
      </div>

      <div className="nice-form-group">
        <label>생년월일</label>
        <input
          type="text"
          placeholder="Your Birth"
          value={userBirth}
          onChange={userBirthOnChangeHandler}
        />
      </div>

      <details>
        <summary>
          <div className="toggle-code" onClick={goSign}>
            회원가입요청
          </div>
        </summary>
      </details>
    </section>
  );
};
export default HookUseCallbackM;

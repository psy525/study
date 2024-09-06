import { useCallback, useState } from "react";

/* 아이디, 비밀번호 입력 받기
   로그인 버튼
*/
//

const PropsPopup2 = ({ close }) => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [valiCheck, setValiCheck] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo ? userInfo.id : null;
  const userPw = userInfo ? userInfo.pw : null;

  const loginIdOnChangeHandler = useCallback((e) => {
    setLoginId(e.target.value);
  });
  const loginPwOnChangeHandler = useCallback((e) => {
    setLoginPw(e.target.value);
  });

  const validationCheck = () => {
    if (!loginId) {
      alert("아이디를 입력하세요");
      return false;
    }
    if (!loginPw) {
      alert("비밀번호를 입력하세요.");
      return false;
    }
    if (loginId != userId) {
      alert("아이디가 존재하지 않습니다");
      return false;
    }
    if (loginPw != userPw) {
      alert("비밀번호가 틀렸습니다.");
      return false;
    }
    setValiCheck(true);
    return true;
  };
  return (
    <div>
      <div
        className="w-60 h-60 border bg-purple-300"
        style={{ position: "absolute", top: "0" }}
      >
        <p style={{ textAlign: "center" }}>
          <strong>로그인 화면</strong>
        </p>

        <div style={{ margin: "10px 20px" }}>
          <label for="id">
            <p className="block">아이디</p>
            <input
              id="id"
              placeholder="아이디입력"
              onChange={loginIdOnChangeHandler}
            ></input>
          </label>
        </div>
        <div style={{ margin: "10px 20px" }}>
          <label for="pw">
            <p className="block">비번</p>
            <input
              id="pw"
              placeholder="비번입력"
              onChange={loginPwOnChangeHandler}
            ></input>
          </label>
        </div>
        <button
          style={{
            position: "absolute",
            bottom: "10%",
            right: "35%",
            backgroundColor: "skyblue",
            borderRadius: "5px",
            padding: "7px",
          }}
          onClick={() =>
            validationCheck()
              ? loginId == userId && loginPw == userPw
                ? close({ id: loginId, pw: loginPw, close: true, login: true })
                : alert("로그인실패")
              : null
          }
        >
          로그인 하기
        </button>
      </div>
    </div>
  );
};
export default PropsPopup2;

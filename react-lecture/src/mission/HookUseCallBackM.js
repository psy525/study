import { useCallback, useEffect, useState } from "react";
import "../Codpen.css";
const HookUseCallbackM = () => {
  //아이디 입력 값
  const [id, setId] = useState("");
  //비밀번호 입력 값
  const [pw, setPw] = useState("");
  //비밀번호 확인 입력 값
  const [pwC, setPwC] = useState("");
  //전화번호 입력값
  const [ph, setPh] = useState("");
  //이름 입력값
  const [name, setName] = useState("");
  //생년월일 8자리
  const [bir, setBir] = useState("");
  const [vari, setVari] = useState(false);

  //입력값들 바꾸기
  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  }, []); //아이디
  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []); //비밀번호
  const pwCOnChangeHandler = useCallback((e) => {
    setPwC(e.target.value);
  }, []); //비밀번호 확인
  const phOnChangeHandler = useCallback((e) => {
    setPh(e.target.value);
  }, []); //전화번호
  const nameOnChangeHandler = useCallback((e) => {
    setName(e.target.value);
  }, []); // 이름
  const birOnChangeHandler = useCallback((e) => {
    setBir(e.target.value);
  }, []); //생년월일

  //비밀번호 확인 버튼
  const pwCheckBtn = useCallback(() => {
    //1. 비밀번호 값이 없으면 알림창
    if (!pw) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    //2. 비밀번호 확인 값이 없으면 알림창
    if (!pwC) {
      alert("비밀번호 확인란을 입력해주세요.");
      return;
    }

    if (pw != pwC) {
      alert("비밀번호가 일치하지 않습니다.");
      setVari(false);
    } else {
      alert("비밀번호 설정완료");
      setVari(true);
    }
  }, [pw, pwC]);

  useEffect(() => {
    if (vari) {
      alert("비밀번호 값이 달라졌습니다");
      setVari(false);
    }
  }, [pw, pwC]);

  //회원가입 버튼
  const regisBtn = () => {
    //1. 비밀번호 확인 버튼 누르기
    if (!pw || !pwC) {
      alert("비밀번호를 입력하세요");
      return;
    }
    if (vari) {
      if (pw != pwC) {
        alert("비밀번호가 달라졌습니다. \n 다시 확인 버튼을 눌러주세요");
        setVari(false);
      } else {
        console.log({ id: id, pw: pw, phone: ph, name: name, birth: bir });
        setVari(false);
        alert("회원가입완료");
      }
    } else {
      alert("비밀번호 확인 버튼을 누르시오");
    }
  };

  return (
    <section>
      <div>
        <div className="nice-form-group">
          <label>아이디</label>
          <input
            type="text"
            placeholder="Your Id"
            onChange={idOnChangeHandler}
          />
        </div>

        <div className="nice-form-group">
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="Your Pw"
            className="icon-left"
            onChange={pwOnChangeHandler}
          />
        </div>

        <div
          className="nice-form-group "
          style={{ display: "inline-block", marginRight: "20px", width: "80%" }}
        >
          <label>비밀번호 확인</label>
          <input
            type="password"
            placeholder="Your Pw Confirm"
            className="icon-left"
            onChange={pwCOnChangeHandler}
          />
        </div>
        <button
          className="inline"
          style={{
            backgroundColor: "aquamarine",
            padding: "10px 5px",
            borderRadius: "10px",
            width: "15%",
          }}
          onClick={pwCheckBtn}
        >
          비밀번호 확인
        </button>

        <div className="nice-form-group">
          <label>전화번호</label>
          <input
            type="text"
            placeholder="Your Phone"
            className="icon-left"
            onChange={phOnChangeHandler}
          />
        </div>

        <div className="nice-form-group">
          <label>이름</label>
          <input
            type="text"
            placeholder="Your Name"
            onChange={nameOnChangeHandler}
          />
        </div>

        <div className="nice-form-group">
          <label>생년월일 8자리</label>
          <input
            type="text"
            placeholder="Your Birth"
            onChange={birOnChangeHandler}
          />
        </div>

        <details>
          <summary>
            <button className="toggle-code" onClick={regisBtn}>
              회원가입요청
            </button>
          </summary>
          <script src="https://gist.github.com/nielsVoogt/8cc4cd8ebc6e81c3f889f1b40037b0cc.js"></script>
        </details>
      </div>
    </section>
  );
};
export default HookUseCallbackM;

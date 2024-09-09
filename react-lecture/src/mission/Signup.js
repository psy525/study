import { useState } from "react";
import SignupTimer from "./SignupTimer";

const Signup = () => {
  //1.입력값들
  const [userId, setUserId] = useState(""); //아이디
  const [userPw, setUserPw] = useState(""); //비밀번호
  const [userEmail, setUserEmail] = useState(""); //이메일
  //이벤트?
  const [codeShow, setCodeShow] = useState(false); // 인증번호 보여주는거
  const [codeCheck, setCodeCheck] = useState(false); //인증번호가 일치할때

  //클릭시
  //1. 랜덤 숫자 로컬로 보내고 창 보여주기
  const emailCheck = () => {
    if (!userId) {
      alert("아이디를 입력하세요");
      return;
    }
    if (!userPw) {
      alert("비밀번호를 입력하세요");
      return;
    }
    if (!userEmail) {
      alert("이메일을 입력하세요");
      return;
    }
    console.log("코드쇼" + codeShow);

    // 창이 보여진 상태에서 이메일 인증을 누른 경우
    if (!codeCheck) {
      let random = "";
      while (random.length < 5) {
        random += Math.floor(Math.random() * 10);
      }
      console.log(random);
      localStorage.setItem("code", random);
      setCodeShow(true);
    } else {
      alert("이메일 인증이 완료되었습니다.");
    }
  };

  // 2. 타이머 창으로 이동했으면 타이머가 작동하기 + 확인 누르면 닫히기
  const goClose = (param) => {
    if (param.codeConfirm) {
      setCodeShow(false);
      setCodeCheck(true);
    }
  };

  //3. 가입하기 버튼 클릭시 로컬에 정보 저장
  const goSignup = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const num = !user.userNo ? 0 : user.userNo + 1;
    console.log(num);
    if (codeCheck) {
      localStorage.setItem(
        `userInfo`,
        JSON.stringify({
          userNo: num,
          id: userId,
          pw: userPw,
          email: userEmail,
        })
      );
    } else {
      alert("이메일 인증을 하세요");
    }
  };
  return (
    <div>
      회원가입
      <div class="lg:col-span-2">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div class="md:col-span-5">
            <label for="id">아이디</label>
            <input
              type="text"
              name="id"
              id="id"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={userId}
              onChange={(e) => {
                setCodeCheck(false);
                setUserId(e.target.value);
              }}
            />
          </div>
          <div class="md:col-span-5">
            <label for="pw"> 비밀번호</label>
            <input
              type="password"
              name="pw"
              id="pw"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={userPw}
              placeholder="비밀번호 입력"
              onChange={(e) => {
                setCodeCheck(false);
                setUserPw(e.target.value);
              }}
            />
          </div>
          <div class="md:col-span-5 inline-block">
            <label for="email">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              class="h-10 border mt-1 rounded px-4 w-80 bg-gray-50"
              value={userEmail}
              placeholder="email@domain.com"
              onChange={(e) => {
                setCodeCheck(false);
                setUserEmail(e.target.value);
              }}
            />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={emailCheck}
            >
              이메일인증
            </button>
          </div>
          {codeShow ? <SignupTimer close={goClose} /> : null}
        </div>
        <div class="md:col-span-5 text-right">
          <div class="inline-flex items-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={goSignup}
            >
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;

import { useCallback, useEffect, useState } from "react";
import SignupTimer from "./SignupTimer";
import SignupTimer2 from "./SignupTimer2";

const Signup2 = () => {
  /* 상태변수 */
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [open, setOpen] = useState(false); //타이머 있는 컴포넌트 오픈 여부

  // const test = () => {
  //   /* Array.form: 다양한 종류의 객체를 배열로 반환시 사용 */
  //   //문자열, 유사배열 -> 배열반환
  //   const set = new Set([1, 2, 3]);
  //   console.log(set);
  //   console.log(Array.from(set));
  //   //매핑함숫하용
  //   const arr = [1, 2, 3];
  //   const res = Array.from(arr, (el) => el * 2);
  //   console.log(res);
  // };
  // test();

  /* 랜덤한 5자리 코드 생성 */
  const getRandomCode = () => {
    //코드생성
    const code = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 10)
    );
    console.log(code.join(""));
    //로컬스토리지에저장
    localStorage.setItem("code", code.join(""));
  };
  useEffect(() => {
    getRandomCode();
  }, []);
  /* 입력요소핸들러 */
  const userIdOnChangeHandler = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const userPwOnChangeHandler = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);
  const userEmailOnChangeHandler = useCallback((e) => {
    setUserEmail(e.target.value);
  }, []);

  /* 자식컴폰먼트에게 전달할 함수 */
  const close = (param) => {
    if (param.success) {
      alert("인증완료입니다.");
    } else {
      alert("인증시간초과입니다.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">회원가입</h2>
          <p className="text-gray-500 mb-6">회원가입 정보를 입력하세요.</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="id">아이디</label>
                    <input
                      type="text"
                      id="id"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userId}
                      onChange={userIdOnChangeHandler}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="password">비밀번호</label>
                    <input
                      type="password"
                      id="password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userPw}
                      onChange={userPwOnChangeHandler}
                    />
                  </div>

                  <label htmlFor="password">이메일</label>
                  <div className="md:col-span-5">
                    <input
                      type="text"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userEmail}
                      style={{ width: "70%" }}
                      onChange={userEmailOnChangeHandler}
                    />
                    <button
                      className="btn bg-orange-700 ml-2 w-20 h-10"
                      onClick={() => {
                        if (!userEmail) {
                          alert("이메일 입력해주세요");
                          return;
                        }
                        setOpen(true);
                      }}
                    >
                      인증
                    </button>
                  </div>
                  {/* 타이머 있는 컴포넌트 연결 */}
                  {open ? <SignupTimer2 init={2} onClose={close} /> : null}
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        회원가입
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup2;

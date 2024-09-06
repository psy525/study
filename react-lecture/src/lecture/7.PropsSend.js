import { useState } from "react";
import PropsChild from "./7.PropsChild";
import PropsChild2 from "./7.PropsChild2";
import PropsPopup from "./8.PropsPopup";
import PropsPopup2 from "./8.PropsPopup2";
import PropsPopup2C from "./8.PropsPopup2정답";

const PropsSend = () => {
  // 데이터 flow 가 단방향:: 부모-> 자식으로 흐르길 원함
  /* Props: 부모가 자식 컴포넌트에 단일 객체형태로 값을 전달 */
  const [open, setOpen] = useState(false); //팝업오픈 여부
  const [code, setCode] = useState("");
  const [openLogin, SetOpenLogin] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [login, setLogin] = useState(false);
  const goClose = (param) => {
    // console.log("나는 자식의 파람" + param);
    // if (param.close) {
    //   setOpen(false);
    // }
    // if (param.code) {
    //   setCode(param.code);
    // }
    if (param.close) {
      setOpen(false);
    }
    if (param.login) {
      setLogin(true);
    }
  };
  // const onClose = (param) => {
  //   SetOpenLogin(false);
  //   alert(param.name);
  // };
  return (
    <div>
      나는 부모 영역
      {/* <PropsChild
        name="짱구"
        age={5}
        list={["철수", "유리"]}
        info={{ test: "test중" }}
      />
      <strong>나는 두번째 자식</strong>
      <PropsChild2 num1="10" num2={10} /> */}
      {/* <br /> 자식한테 넘어온 코드 값: {code}
      <button className="block" onClick={() => setOpen(true)}>
        팝업열기
      </button>
      {open ? <PropsPopup title="이벤트" close={goClose} /> : null} */}
      <br />
      <button onClick={() => setOpen(true)}>로그인화면 오픈</button>
      {open ? <PropsPopup2 close={goClose} /> : null}
      <br />
      <div>
        {login ? (
          <p>
            <strong style={{ backgroundColor: "skyblue" }}>
              {userInfo.name}
            </strong>
            님 환영합니다
          </p>
        ) : (
          ""
        )}
      </div>
      <button onClick={() => SetOpenLogin(true)}>ㄹ그인오픈</button>
      {/* {openLogin ? <PropsPopup2C onClose={close} /> : null} */}
    </div>
  );
};
export default PropsSend;

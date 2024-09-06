import { useCallback, useState } from "react";

const PropsPopup2C = ({ onclose }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  });
  const pwOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  });
  const goLogin = () => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    console.log(info);
    if (info.id == id && info.pw == pw) {
      alert("로그인 성공");
      onclose({ name: info.name });
    } else {
      alert("로그인 tlfvo");
    }
  };
  return (
    <div>
      아이디
      <input
        type="text"
        className="border"
        onChange={idOnChangeHandler}
      ></input>
      <br />
      비밀번호
      <input
        type="text"
        className="border"
        onChange={pwOnChangeHandler}
      ></input>
      <button onClick={goLogin}>로그인하기</button>
    </div>
  );
};
export default PropsPopup2C;

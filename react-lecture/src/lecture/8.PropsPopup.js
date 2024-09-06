import { useCallback, useState } from "react";

const PropsPopup = ({ title, close }) => {
  console.log(close);
  const [code, setCode] = useState("");
  const codeOnChangeHandler = useCallback((e) => {
    setCode(e.target.value);
  });
  return (
    <div
      className="w-40 h-40 border bg-purple-300"
      style={{ position: "absolute", top: "0" }}
    >
      {title} 팝업창
      <input
        className="border"
        type="text"
        onChange={codeOnChangeHandler}
      ></input>
      <button onClick={() => close({ code: code, close: true })}>확인</button>
      <button
        style={{ position: "absolute", bottom: "0", right: "50%" }}
        onClick={() => close({ close: true })}
      >
        닫기
      </button>
    </div>
  );
};
export default PropsPopup;

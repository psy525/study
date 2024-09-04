import { useEffect, useState } from "react";

const HookUseEffectM = () => {
  const list = [
    { type: "admin", menu: "회원전체관리화면" },
    { type: "user", menu: "개인정보관리화면" },
    { type: "user", menu: "알림설정화면" },
    { type: "admin", menu: "배너관리화면" },
    { type: "admin", menu: "회사정보관리화면" },
  ];
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("관리자모드");

  const change = () => {
    if (count == 0) {
      setCount(1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="p-8 space-y-8">
      <p
        id="mode"
        className="text-indigo-600 font-bold my-3"
        style={{ display: "inline-block", margin: "10px" }}
      >
        {count == 0 ? "관리자" : "사용자"} 모드
      </p>
      <button
        onClick={change}
        style={{
          backgroundColor: "skyblue",
          borderRadius: "10px",
          padding: "5px",
          margin: "10px",
        }}
      >
        모드 변경
      </button>
      <div id="content">
        {list.map((v, i) => {
          if (count == 0) {
            if (v.type == "admin") {
              return (
                <ul
                  className="pl-4 border-l-2 border-indigo-100 text-indigo-900"
                  key={i}
                >
                  <li className="px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg">
                    {v.menu}
                  </li>
                </ul>
              );
            }
          } else {
            if (v.type == "user") {
              return (
                <ul
                  className="pl-4 border-l-2 border-indigo-100 text-indigo-900"
                  key={i}
                >
                  <li className="px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg">
                    {v.menu}
                  </li>
                </ul>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
export default HookUseEffectM;

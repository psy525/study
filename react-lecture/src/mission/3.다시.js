import { useEffect, useState } from "react";

const HookUseEffectMRe = () => {
  const list = [
    { type: "admin", menu: "회원전체관리화면" },
    { type: "user", menu: "개인정보관리화면" },
    { type: "user", menu: "알림설정화면" },
    { type: "admin", menu: "배너관리화면" },
    { type: "admin", menu: "회사정보관리화면" },
  ];
  const [count, setCount] = useState(0);
  const [menuList, setMenuList] = useState({ admin: [], user: [] });
  const [adminList, setAdminList] = useState([]);
  const [userList, setUserList] = useState([]);
  const change = () => {
    if (count == 0) {
      setCount(1);
    } else {
      setCount(0);
    }
    console.log(adminList[1].menu);
  };

  useEffect(() => {
    setAdminList(list.filter((i) => i.type == "admin"));
    setUserList(list.filter((i) => i.type == "user"));
  }, []);

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
        className="py-1.5 px-4 transition-colors bg-indigo-600 active:bg-indigo-800 font-medium text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        모드 변경
      </button>
      <div id="content">
        <ul lassName="pl-4 border-l-2 border-indigo-100 text-indigo-900">
          {count == 0
            ? adminList.map((v, i) => {
                return (
                  <li className="px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg">
                    {v.menu}
                  </li>
                );
              })
            : userList.map((v, i) => {
                return (
                  <li className="px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg">
                    {v.menu}
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};
export default HookUseEffectMRe;

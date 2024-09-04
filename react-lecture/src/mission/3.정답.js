import { useEffect, useState } from "react";

const HookUseEffectMC = () => {
  const list = [
    { type: "admin", menu: "회원전체관리화면" },
    { type: "user", menu: "개인정보관리화면" },
    { type: "user", menu: "알림설정화면" },
    { type: "admin", menu: "배너관리화면" },
    { type: "admin", menu: "회사정보관리화면" },
  ];
  const [isAdmin, setIsAdmin] = useState(false); //관리자모드여부
  const [menuList, setMenuList] = useState({ admin: [], user: [] });
  useEffect(() => {
    //list->관리자, 사용자 메뉴 추출 -> 메뉴리스트
    const adminList = list.filter((item) => item.type == "admin");
    const userList = list.filter((item) => item.type == "user");
    setMenuList({ admin: adminList, user: userList });
  }, []);

  return (
    <div className="p-8 space-y-8">
      <p
        id="mode"
        className="text-indigo-600 font-bold my-3"
        style={{ display: "inline-block", margin: "10px" }}
      >
        {isAdmin ? "관리자" : "사용자"} 모드
      </p>
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="py-1.5 px-4 transition-colors bg-indigo-600 active:bg-indigo-800 font-medium text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        모드변경
      </button>
      <ul className="pl-4 border-l-2 border-indigo-100 text-indigo-900">
        {isAdmin
          ? menuList.admin.map((v, i) => {
              return (
                <li className="cursor-pointer px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg">
                  {v.menu}
                </li>
              );
            })
          : menuList.user.map((v, i) => {
              return (
                <li className="cursor-pointer px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg">
                  {v.menu}
                </li>
              );
            })}
      </ul>
    </div>
  );
};
export default HookUseEffectMC;

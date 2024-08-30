import { useState } from "react";

const HookUseStateM = () => {
  //   //   const [titleList, setTitleList] = useState([]);
  //   let [title, setTitle] = useState("");
  //   //   const [contentList, setContentList] = useState([]);
  //   let [content, setContent] = useState("");

  //   const nameOnChangeHandler1 = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const nameOnChangeHandler2 = (e) => {
  //     setContent(e.target.value);
  //   };

  //   //   const addTitleContent = () => {
  //   //     setTitleList([...titleList, title]);
  //   //     setContentList([...contentList, content]);
  //   //   };

  //   let todo = { [title]: content };
  //   let [todoList, setTodoList] = useState({ "": "" });

  //   const addContent = () => {
  //     todoList = todo;
  //     setTodoList({ ...todoList, todo });
  //     console.log(todoList);
  //   };

  const [title, setTitle] = useState(""); //제목
  const [content, setContent] = useState(""); //내용
  const [list, setList] = useState([]); //할일목록

  const [info, setInfo] = useState({ title: "", content: "" });
  /* 입력관련 핸들러 */

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
    // setInfo({ title: e.target.value, content: info.content });
  };
  const contentOnChangeHandler = (e) => {
    setContent(e.target.value);
    // setInfo({ title: info.title, content: e.target.value });
  };
  /* 제목, 내용 저장하기 -> 목록에 추가 */
  const goSave = () => {
    setList([...list, { title: title, content: content }]);
    console.log(list);

    //초기화
    setTitle("");
    setContent("");
    setInfo({ title: "", content: "" });
  };
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6">
      <div className="relative rounded overflow-hidden border border-grey-light mb-8 bg-white">
        <div className="border-b border-grey-light p-4 bg-grey-lighter py-8">
          <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-2 py-4">
              <div className="flex-grow">
                <h3 className="font-normal px-2 py-3 leading-tight">
                  할 일 목록
                </h3>
                <input
                  type="text"
                  placeholder="할 일 제목 입력"
                  className="border my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none"
                  onChange={titleOnChangeHandler}
                  value={info.title}
                />
                <input
                  type="text"
                  placeholder="할 일 내용 입력"
                  className="border my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none"
                  onChange={contentOnChangeHandler}
                  value={info.content}
                />
                <div className="flex-grow text-right">
                  <button
                    onClick={goSave}
                    className="border text-grey-darkest hover:text-grey-dark py-2 px-4 rounded"
                  >
                    저장
                  </button>
                </div>
                <div className="w-full">
                  {list.map((v, i) => {
                    return (
                      <div
                        key={i}
                        className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded"
                      >
                        <div className="w-8 h-10 text-center py-1">
                          <p className="text-3xl p-0 text-green-dark">&bull;</p>
                        </div>
                        <div className="w-4/5 h-10 py-3 px-1">
                          <p className="hover:text-blue-dark">{v.title} </p>
                        </div>
                        <div className="w-1/2 h-10 text-right p-3">
                          <p className="text-sm text-grey-dark">{v.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HookUseStateM;

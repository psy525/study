import { useState } from "react";

const SchedulePopUp = ({ goClose }) => {
  /*상태변수*/
  const [schTitle, setSchTitle] = useState("");
  const [schContent, setSchContent] = useState("");
  const [schStartDate, setSchStartDate] = useState("");
  const [schEndtDate, setSchEndDate] = useState("");

  //시작일과 종료일 입력시 숫자만입력되게 정규식 사용
  // 숫자입력시 2024-09-10 저렇게 되게 하이픈 추가하기

  //등록버튼 클릭시
  const addSchedule = () => {
    //1. 내용 빠진거 없는지 확인
    if (!schTitle) {
      alert("제목을 입력하세요");
    }
    if (!schContent) {
      alert("일정 내용을 입력하세요");
    }

    //2. 부모에게 내용 전달하기 close에 담아서 보내면됨
    goClose({
      title: schTitle,
      content: schContent,
      start: !schStartDate ? Date() : new Date(schStartDate),
      end: !schEndtDate ? Date() : new Date(schStartDate),
      close: true,
    });
  };

  //최소버튼 클릭시 닫히게 하기
  const popUpClose = () => {
    goClose({ close: true });
  };
  return (
    <div>
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            스케줄추가하기
          </h1>
          <label
            for="title"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            스케줄 제목
          </label>
          <input
            id="title"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="제목 필수입니다"
            value={schTitle}
            onChange={(e) => {
              setSchTitle(e.target.value);
            }}
          />
          <label
            for="content"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            스케줄 내용
          </label>
          <input
            id="content"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="내용 필수입니다"
            value={schContent}
            onChange={(e) => setSchContent(e.target.value)}
          />
          <label
            for="startDate"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            value
          >
            시작일
          </label>
          <div className="relative mb-5 mt-2">
            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
            <input
              id="startDate"
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="2024-09-10 - 없이 숫자만 입력하세요"
              value={schStartDate}
              onChange={(e) => setSchStartDate(e.target.value)}
            />
          </div>
          <label
            for="endDate"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            종료일
          </label>
          <div className="relative mb-5 mt-2">
            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
            <input
              id="endDate"
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="2024-09-10  - 없이 숫자만 입력하세요"
              value={schEndtDate}
              onChange={(e) => setSchEndDate(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-start w-full">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
              onClick={addSchedule}
            >
              등록
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={popUpClose}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SchedulePopUp;

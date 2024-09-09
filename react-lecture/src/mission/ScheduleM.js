import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
import SchedulePopUp from "./SchedulePopUp";

const localizer = momentLocalizer(moment);

const ScheduleM = () => {
  /*상태변수*/
  const [eventList, setEventList] = useState([
    {
      title: "",
      start: new Date().toLocaleDateString("en-CA"),
      end: new Date().toLocaleDateString("en-CA"),
      content: "",
    },
  ]);
  const [openPopUp, setOpenPopUp] = useState(false);

  //이벤트 글자 클릭시
  const goSelectEvent = (param) => {
    //하단에 내용 적히기
    console.log("하단" + param);
  };

  //클릭시 오픈
  const goSelectSlot = (param) => {
    console.log("셀렉트 슬록" + param);
    setOpenPopUp(true);
  };

  //닫히는 함수
  const close = (param) => {
    if (param.close) {
      setOpenPopUp(false);
    }

    setEventList([
      ...eventList,
      {
        title: param.title,
        start: new Date(param.start).toLocaleDateString("en-CA"),
        end: new Date(param.end).toLocaleDateString("en-CA"),
        content: param.content,
      },
    ]);
  };
  console.log(eventList);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={goSelectEvent}
        onSelectSlot={goSelectSlot}
      />
      {openPopUp ? <SchedulePopUp goClose={close} /> : null}

      <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
        <div className="px-4">
          <div className="border-b pb-4 border-gray-400 border-dashed">
            {eventList.map((v, i) => {
              if (v.title) {
                return (
                  <>
                    <p
                      className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300"
                      key={i}
                    >
                      시작일 : {v.start} 종료일 : {v.end}
                    </p>
                    <a
                      tabIndex="0"
                      key={i}
                      className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                    >
                      {v.title}
                    </a>
                    <p className="text-sm pt-2  text-gray-600 dark:text-gray-300">
                      {v.content}
                    </p>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduleM;

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const eventList = [
    { title: "이벤트1", start: new Date(), end: new Date(), content: "내용물" },
    {
      title: "이벤트2",
      start: new Date("2024-09-10"),
      end: new Date("2024-09-13"),
    },
  ];
  const goSelectEvent = (param) => {
    console.log(param);
    alert(`네가 클릭한 이벤트는 ${param.title}이야`);
  };

  const goSelectSlot = (param) => {
    console.log(param.start);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={goSelectEvent}
        onSelectSlot={goSelectSlot}
        selectable
      />
    </div>
  );
};
export default Schedule;

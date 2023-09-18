import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import { ScheduleUserAction } from "../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'



function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

const Calender = (props) => {
  const {arr} = props;

  const dispatch = useDispatch();
  const { userID } = useSelector((root) => root.LoginReducer);
  const { userSchedule } = useSelector((root) => root.UserReducer);


  const [selectedDate, setSelectedDate] = useState(new Date());

  const [events, setEvents] = useState(arr);
  useEffect(() => {
    setEvents(arr)
  }, [arr]);

  const eventsForSelectedDate = events.filter((event) =>
    isSameDay(selectedDate, event.date)
  );

  const handleEventClick = (title) => {

  };

  return (
    <div>
      <div>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={({ date, view }) => {
            if (view === "month") {
              const hasEvent = events.some((event) =>
                isSameDay(date, event.date)
              );
              return hasEvent ? "highlighted" : "";
            }
            return "";
          }}
        />
      </div>
      <div>
        {eventsForSelectedDate.length > 0 ? (
          <div>
            <div>
              Sự kiện trong ngày{" "}
              {format(selectedDate, "eeee, dd/MM/yyyy", { locale: vi })}
            </div>
            <ul>
              {eventsForSelectedDate.map((event, index) => (
                <li key={index} style={{fontWeight:'bold'}} onClick={() => handleEventClick(event.title)}>
                  <NavLink to={`/detailactivity/${event.actiID}`} style={{display:'flex', flexDirection:'column'}}>
                  {event.title} - {event.hour}:{event.min} {event.hour >12 ?"tối":'sáng'}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            Không có sự kiện trong ngày{" "}
            {format(selectedDate, "eeee, dd/MM/yyyy", { locale: vi })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calender;

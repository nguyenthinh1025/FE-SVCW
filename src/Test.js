import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/vi'; // Import ngôn ngữ tiếng Việt

moment.locale('vi'); // Đặt ngôn ngữ mặc định cho moment

const localizer = momentLocalizer(moment);
const [selectedEvent, setSelectedEvent] = useState(null);
const events = [
  {
    title: 'Họp công ty',
    start: new Date(2023, 8, 20, 10, 0),
    end: new Date(2023, 8, 20, 11, 0),
    color: '#FF5733' // Chọn một màu để đại diện cho sự kiện
  },
  {
    title: 'Hội thảo',
    start: new Date(2023, 8, 21, 14, 0),
    end: new Date(2023, 8, 21, 16, 0),
    color: '#33FF57'
  },
  {
    title: 'Cuộc gặp khẩn cấp',
    start: new Date(2023, 8, 22, 9, 30),
    end: new Date(2023, 8, 22, 10, 0),
    color: '#5733FF'
  },
  // Thêm các sự kiện khác tại đây...
];

const CalendarComponent = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={(event, start, end, isSelected) => {
          return { style: { backgroundColor: event.color } };
        }}
        views={['month', 'week', 'day', 'agenda']}
        formats={{
          eventTimeRangeFormat: ({ start, end }, culture, local) =>
            local.format(start, 'h:mm A', culture) +
            ' - ' +
            local.format(end, 'h:mm A', culture),
        }}
        onSelectEvent={event => console.log('Chi tiết sự kiện:', event)}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultView="week" // Thay đổi chế độ hiển thị mặc định thành "month"
      />
    </div>
  );
}

export default CalendarComponent;
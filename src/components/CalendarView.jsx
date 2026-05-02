import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ tasks }) {
  const [date, setDate] = useState(new Date());

  const selectedDate = date.toLocaleDateString();

  const tasksForDay = tasks.filter(
    (t) => t.date === selectedDate
  );

  return (
    <div>
      <h3>📅 Calendar</h3>

      <Calendar onChange={setDate} value={date} />

      <h4>Tasks on {selectedDate}</h4>

      {tasksForDay.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasksForDay.map((t, i) => (
          <p key={i}>
            {t.text} {t.completed ? "✅" : ""}
          </p>
        ))
      )}
    </div>
  );
}

export default CalendarView;
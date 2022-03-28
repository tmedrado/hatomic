import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Calendar } from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

function HabitCalendar() {
  const [value, onChange] = useState(new Date());
  const [daysDone, setDaysDone] = useState([]);

  const isDone = (day) =>
    daysDone
      .map((date) => moment(date).format('l'))
      .includes(moment(day).format('l'));

  return (
    <Calendar
      value={value}
      maxDate={new Date()}
      formatDay={(locale, date) =>
        isDone(date) ? <CheckCircleIcon /> : new Date(date).getDate()
      }
      onClickDay={(day) =>
        isDone(day)
          ? setDaysDone(
              daysDone.filter(
                (item) => moment(item).format('l') !== moment(day).format('l')
              )
            )
          : setDaysDone([...daysDone, day])
      }
    />
  );
}

export default HabitCalendar;

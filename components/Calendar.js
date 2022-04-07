import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Calendar } from 'react-calendar'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'

const HabitCalendar = ({ daysDone, setDaysDone }) => {
  const isDone = (day) => daysDone.map((date) => moment(date).format('l')).includes(moment(day).format('l'))

  const handleDayClick = (day) =>
    isDone(day)
      ? setDaysDone(daysDone.filter((item) => moment(item).format('l') !== moment(day).format('l')))
      : setDaysDone([...daysDone, day])

  return (
    <Calendar
      maxDate={new Date()}
      formatDay={(locale, date) => (isDone(date) ? <CheckCircleIcon /> : new Date(date).getDate())}
      onClickDay={handleDayClick}
    />
  )
}

export default HabitCalendar

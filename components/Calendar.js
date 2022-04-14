import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Calendar } from 'react-calendar'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'

const HabitCalendar = ({ editingHabit, setEditingHabit }) => {
  const { daysDone } = editingHabit

  const isDone = (day) => daysDone.map((date) => moment(date).format('l')).includes(moment(day).format('l'))

  const handleClickDay = (day) =>
    isDone(day)
      ? setEditingHabit({
          ...editingHabit,
          daysDone: daysDone.filter((item) => moment(item).format('l') !== moment(day).format('l')),
        })
      : setEditingHabit({ ...editingHabit, daysDone: [...daysDone, day] })

  return (
    <Calendar
      maxDate={new Date()}
      formatDay={(_locale, date) => (isDone(date) ? <CheckCircleIcon /> : new Date(date).getDate())}
      onClickDay={handleClickDay}
    />
  )
}

export default HabitCalendar

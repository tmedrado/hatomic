import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Calendar } from 'react-calendar'
import moment from 'moment'

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
      className="react-cal"
      maxDate={new Date()}
      formatDay={(_locale, date) => (isDone(date) ? <CheckCircleIcon /> : new Date(date).getDate())}
      onClickDay={handleClickDay}
    />
  )
}

export default HabitCalendar

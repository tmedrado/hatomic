import { IconButton, Container, Typography, CircularProgress } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import HabitCalendar from '../components/Calendar'
import HabitCard from '../components/HabitCard'

const Home = () => {
  const [habits, setHabits] = useState([])
  const [daysDone, setDaysDone] = useState(0)
  const router = useRouter()

  useEffect(() => {
    setHabits([
      { title: 'Jogging', frequency: 'daily', times: '1' },
      { title: 'Meditate', frequency: 'weekly', times: '3' },
    ])
  }, [])

  return (
    <Container>
      <Typography mx={3} variant="h2" component="div">
        habit
        <IconButton color="primary" onClick={() => router.push('/create')}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Typography>
      {habits.map((habit) => (
        <HabitCard key={habit.title} habit={habit} />
      ))}
      <br />
      <CircularProgress
        variant="determinate"
        value={((daysDone % 7) / 7) * 100}
        onClick={() => setDaysDone(daysDone + 1)}
      />
      <HabitCalendar />
    </Container>
  )
}

export default Home

import { IconButton, Container, Typography } from '@material-ui/core'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import HabitCard from '../components/HabitCard'
import Sidebar from '../components/Sidebar'
import { prisma } from '../lib/prisma'

const Home = () => {
  const [habits, setHabits] = useState([])
  const [sideOpen, setSideOpen] = useState(false)
  const [editingHabit, setEditingHabit] = useState({})
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
      <Sidebar
        open={sideOpen}
        setSideOpen={setSideOpen}
        editingHabit={editingHabit}
        setEditingHabit={setEditingHabit}
      />
      {habits.map((habit) => (
        <HabitCard key={habit.title} habit={habit} setSideOpen={setSideOpen} setEditingHabit={setEditingHabit} />
      ))}
      <br />
    </Container>
  )
}

export const getServerSideProps = async () => {
  const habits = await prisma.habit.findMany()
  const data = habits.map((habit) => ({
    id: habit.id,
    frequency: habit.frequency,
    times: habit.times,
    active: habit.active,
  }))

  return {
    props: {
      data,
    },
  }
}

export default Home

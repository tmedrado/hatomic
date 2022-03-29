import { IconButton, Container, Typography } from '@material-ui/core'

import { useRouter } from 'next/router'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { getSession } from 'next-auth/react'
import HabitCard from '../components/HabitCard'
import Sidebar from '../components/Sidebar'
import { prisma } from '../lib/prisma'

const Home = ({ data }) => {
  const [habits, setHabits] = useState(data)
  const [sideOpen, setSideOpen] = useState(false)
  const [editingHabit, setEditingHabit] = useState({})
  const router = useRouter()

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
      <button type="submit" onClick={() => setHabits({})} />
    </Container>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) return { props: { data: [] } }

  const {
    user: { email },
  } = session

  const habits = await prisma.habit.findMany({
    where: {
      User: {
        email,
      },
    },
  })

  const data = habits.map((habit) => ({
    id: habit.id,
    title: habit.title,
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

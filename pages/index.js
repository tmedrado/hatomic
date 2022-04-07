import { IconButton, Container, Typography, Grid } from '@material-ui/core'

import { useRouter } from 'next/router'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { getSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import HabitCard from '../components/HabitCard'
import Sidebar from '../components/Sidebar'
import { prisma } from '../lib/prisma'
import HatomicJogging from '../public/hatomic-run.svg'

const Home = ({ data }) => {
  const [habits] = useState(data)
  const [sideOpen, setSideOpen] = useState(false)
  const [editingHabit, setEditingHabit] = useState({})
  const router = useRouter()

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} align="center">
          <Image src={HatomicJogging} width={300} height={400} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography mx={3} variant="h2" component="div">
            habit
            <IconButton
              color="primary"
              onClick={async () => ((await getSession()) ? router.push('/create') : signIn('google'))}
            >
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
        </Grid>
      </Grid>
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
    schedule: habit.schedule,
  }))

  return {
    props: {
      data,
      session,
    },
  }
}

export default Home

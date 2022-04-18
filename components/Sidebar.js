import { Divider, Grid, IconButton, Stack, SwipeableDrawer, TextField, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined'
import ScheduleIcon from '@mui/icons-material/Schedule'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Alert from '@mui/material/Alert'

import RepeatIcon from '@mui/icons-material/Repeat'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { useState } from 'react'
import HabitCalendar from './Calendar'

const Sidebar = ({ open, setSideOpen, editingHabit, setEditingHabit, setHabits }) => {
  const [userWantToDelete, setUserWantToDelete] = useState(false)

  const handleClose = async () => {
    setSideOpen(!open)
    setUserWantToDelete(false)
    await axios.post('/api/habits/update', { editingHabit }).then(() =>
      setHabits((habits) =>
        habits.map((habit) => {
          if (habit.id === editingHabit.id) return editingHabit
          return habit
        })
      )
    )
  }

  const handleDeleteHabit = async () => {
    setSideOpen(!open)
    await axios
      .post('/api/habits/delete', { habitId: editingHabit.id })
      .then(() => setHabits((habits) => habits.filter((habit) => habit.id !== editingHabit.id)))
  }

  return (
    <div>
      <SwipeableDrawer anchor="right" open={open} onOpen={() => console.log('abriu')} onClose={handleClose}>
        <Stack direction="row" display="flex" justifyContent="space-between" sx={{ maxWidth: '100%' }}>
          <Typography p={2} variant="h5">
            {editingHabit.title}
          </Typography>
          <Typography onClick={handleClose} p={2} variant="h5">
            X
          </Typography>
        </Stack>
        <Divider />
        <Stack alignItems="center" spacing={3} mb={3}>
          <Stack alignItems="center">
            <Typography pt={3} variant="body2">
              <strong>title</strong>
            </Typography>
            <TextField
              onChange={(e) => setEditingHabit({ ...editingHabit, title: e.target.value })}
              value={editingHabit.title}
              color="primary"
              variant="outlined"
            />
          </Stack>
          <Stack alignItems="center" px={3}>
            <Typography variant="body2">
              <strong>days done</strong>
            </Typography>
            <HabitCalendar editingHabit={editingHabit} setEditingHabit={setEditingHabit} />
          </Stack>
          <Stack alignItems="center" px={3}>
            <Typography variant="body2">
              <strong>status</strong>
            </Typography>
            <IconButton
              onClick={() => {
                setEditingHabit({ ...editingHabit, active: !editingHabit.active })
              }}
              color="primary"
            >
              {editingHabit.active ? <RocketLaunchIcon /> : <PauseOutlinedIcon />}
            </IconButton>
            <small>{`habit is ${editingHabit.active ? 'active' : 'paused'}`}</small>
          </Stack>
          <Stack alignItems="center">
            <Grid container direction="row" alignItems="center" mt={2}>
              <RepeatIcon fontSize="small" />
              <Typography variant="body2">
                <strong>repeat time</strong>
              </Typography>
            </Grid>
            {editingHabit.frequency}
          </Stack>
          <Stack alignItems="center">
            <Grid container direction="row" alignItems="center" mt={2}>
              <ScheduleIcon fontSize="small" />
              <Typography variant="body2">
                <strong>schedule</strong>
              </Typography>
            </Grid>
            {editingHabit.schedule}
          </Stack>

          {userWantToDelete ? (
            <Alert
              sx={{ maxWidth: '390px' }}
              variant="outlined"
              severity="warning"
              action={
                <Button variant="outlined" color="secondary" fullWidth size="small" onClick={handleDeleteHabit}>
                  CONFIRM
                </Button>
              }
            >
              Do you want to delete your habit? <strong>This is irreversible!</strong>
            </Alert>
          ) : (
            <DeleteForeverIcon onClick={() => setUserWantToDelete(true)} />
          )}
        </Stack>

        <Divider />
        <Button variant="contained" color="primary" onClick={handleClose}>
          save
        </Button>
      </SwipeableDrawer>
    </div>
  )
}

export default Sidebar

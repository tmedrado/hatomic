import { Divider, Grid, IconButton, Stack, SwipeableDrawer, TextField, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined'
import ScheduleIcon from '@mui/icons-material/Schedule'

import RepeatIcon from '@mui/icons-material/Repeat'
import { Button } from '@material-ui/core'
import HabitCalendar from './Calendar'

const Sidebar = ({ open, setSideOpen, editingHabit, setEditingHabit }) => {
  const handleClose = () => {
    setSideOpen(!open)
    setEditingHabit({})
  }
  return (
    <div>
      <SwipeableDrawer anchor="right" open={open} onOpen={() => console.log('abriu')} onClose={handleClose}>
        <Stack direction="row" display="flex" justifyContent="space-between">
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
            <HabitCalendar />
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
            <small>{`Habit is ${editingHabit.active ? 'active' : 'paused'}`}</small>
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

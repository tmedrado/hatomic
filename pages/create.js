/* eslint-disable max-len */
import { TextField, Grid, Button, Radio, FormControlLabel, Typography, RadioGroup } from '@mui/material'
import { useState } from 'react'

import SendIcon from '@mui/icons-material/Send'
import RepeatIcon from '@mui/icons-material/Repeat'
import ScheduleIcon from '@mui/icons-material/Schedule'

const HabitForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    frequency: '',
    times: '1',
    active: true,
  })

  const REPEAT_TIME_OPTIONS = ['daily', 'weekly', 'monthly']
  const SCHEDULE_OPTIONS = ['anytime', 'morning', 'afternoon', 'night time']

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleCreateHabit = (e) => {
    e.preventDefault()

    fetch('https://hatomic-git-master-tmedrado.vercel.app/create', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <Grid container justifyContent="center" direction="column" padding={4}>
      <Typography variant="h3"> new habit</Typography>
      <br />

      <TextField name="title" onChange={handleChange} label="title" color="primary" variant="outlined" />

      <Grid container direction="row" alignItems="center" mt={2}>
        <RepeatIcon fontSize="small" />
        <Typography variant="h6"> repeat time</Typography>
      </Grid>
      <RadioGroup row name="frequency" onChange={handleChange}>
        {REPEAT_TIME_OPTIONS.map((item) => (
          <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        ))}
      </RadioGroup>
      {['weekly', 'monthly'].includes(formData.frequency) && (
        <>
          <Typography variant="h7">
            repeat {formData.times === '1' ? 'once ' : `${formData.times} days`} a{' '}
            {formData.frequency === 'weekly' ? 'week' : 'month'}
          </Typography>
          <RadioGroup row name="times" onChange={handleChange}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
            ))}
          </RadioGroup>
        </>
      )}

      <Grid container direction="row" alignItems="center" mt={2}>
        <ScheduleIcon fontSize="small" />
        <Typography variant="h6"> schedule</Typography>
      </Grid>
      <RadioGroup row>
        {SCHEDULE_OPTIONS.map((item) => (
          <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        ))}
      </RadioGroup>
      <br />
      <Button style={{ marginTop: 5 }} variant="contained" endIcon={<SendIcon />} onClick={handleCreateHabit}>
        Create Habit
      </Button>
    </Grid>
  )
}

export default HabitForm

import {
  TextField, Grid, Button, Select, MenuItem, FormControl, InputLabel,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';

function HabitForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', frequency: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      spacing={1}
      padding={4}
    >
      <TextField required name="name" onChange={handleChange} label="Habit Name" color="primary" variant="standard" />
      <FormControl required>
        <InputLabel>Frequency</InputLabel>
        <Select
          value={formData.frequency}
          label="Frequency"
          name="frequency"
          onChange={handleChange}
        >
          <MenuItem value={1}>Every Day</MenuItem>
          <MenuItem value={2}>Every Other Day</MenuItem>
          <MenuItem value={7}>Every Week</MenuItem>
          <MenuItem value={30}>Every Month</MenuItem>
        </Select>
      </FormControl>
      <Button style={{ marginTop: 5 }} variant="contained" endIcon={<SendIcon />} onClick={() => router.push('/')}>Criar Hábito</Button>
    </Grid>

  );
}

export default HabitForm;

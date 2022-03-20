import {
  CardActionArea, Card, CardContent, Typography, Grid,
} from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';

import { currentMonth } from './utils/moment';

export default function HabitCard({ habit: { title, frequency, times } }) {
  const TIME_MAP = {
    daily: 'day',
    weekly: 'week',
    monthly: 'month',
  };
  return (
    <Card raised sx={{ maxWidth: 345, marginTop: 3 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Grid container direction="row" alignItems="center" mt={2}>
            <RepeatIcon fontSize="small" />
            <Typography>
              {' '}
              at least
              {' '}
              {times === '1' ? 'once' : `${times} times` }
              {' '}
              a
              {' '}
              {TIME_MAP[frequency]}

            </Typography>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            {currentMonth.toLowerCase()}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}

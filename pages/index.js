import { IconButton, Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import HabitCard from '../components/HabitCard';

function Home() {
  const [habits, setHabits] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setHabits([{ title: 'Jogging', frequency: 'daily', times: '1' }, { title: 'Meditate', frequency: 'weekly', times: '3' }]);
  }, []);

  return (
    <Container>
      <Typography mx={3} variant="h2" component="div">
        habit
        <IconButton color="primary" onClick={() => router.push('/create')}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Typography>
      {habits.map((habit) => <HabitCard habit={habit} />)}
    </Container>
  );
}

export default Home;

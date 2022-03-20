import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  return (
    <Container>
      <Typography mx={3} variant="h2" component="div">
        habit  +
      </Typography>
    </Container>
  );
}

export default Home;

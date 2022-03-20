import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push('/create')} variant="outlined" color="primary"> Criar um Hábito</Button>
      <Button onClick={() => router.push('/create')} variant="outlined" color="primary"> Criar um Hábito</Button>
    </div>
  );
}

export default Home;

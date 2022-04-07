import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()

  const router = useRouter()
  return (
    <AppBar position="static">
      <Toolbar>
        <RocketLaunchIcon />
        <Typography
          variant="h5"
          onClick={() => {
            router.push('/')
          }}
        >
          Hatomic
        </Typography>
        {session ? (
          <Button color="secondary" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button color="secondary" onClick={() => signIn('google')}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar

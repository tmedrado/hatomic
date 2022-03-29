import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const Navbar = () => {
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
        <div />
      </Toolbar>
    </AppBar>
  )
}
export default Navbar

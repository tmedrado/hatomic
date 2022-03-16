import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <RocketLaunchIcon />
        <Typography variant="h5">
          Hatomic
        </Typography>
        <div />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

import { createTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme

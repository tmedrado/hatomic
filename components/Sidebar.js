import { SwipeableDrawer } from '@mui/material'
import HabitCalendar from './Calendar'

const Sidebar = ({ open, setSideOpen, editingHabit, setEditingHabit }) => (
  <div>
    <SwipeableDrawer
      anchor="right"
      open={open}
      onOpen={() => console.log('abriu')}
      onClose={() => {
        setSideOpen(!open)
        setEditingHabit({})
      }}
    >
      {JSON.stringify(editingHabit)}
      <HabitCalendar />
    </SwipeableDrawer>
  </div>
)
export default Sidebar

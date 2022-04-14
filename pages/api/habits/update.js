import { prisma } from '../../../lib/prisma'

export default async function (req, res) {
  const {
    editingHabit: { title, status, daysDone, id, active },
  } = req.body

  await prisma.habit.update({
    where: {
      id,
    },
    data: {
      title,
      status,
      daysDone,
      active,
    },
  })

  return res.status(201).json({})
}

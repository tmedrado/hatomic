import { prisma } from '../../../lib/prisma'

export default async function (req, res) {
  const {
    editingHabit: { title, status, daysDone, id },
  } = req.body

  await prisma.habit.update({
    where: {
      id,
    },
    data: {
      title,
      status,
      daysDone,
    },
  })

  return res.status(201).json({})
}

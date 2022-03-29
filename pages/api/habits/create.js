import { prisma } from '../../../lib/prisma'

export default async function (req, res) {
  const {
    formData: { title, frequency, active, schedule, times },
  } = req.body
  await prisma.habit.create({
    data: {
      title,
      frequency,
      active,
      times: Number(times),
      schedule,
    },
  })

  return res.status(201).json({})
}

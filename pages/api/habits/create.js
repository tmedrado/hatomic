import { getSession } from 'next-auth/react'
import { prisma } from '../../../lib/prisma'

export default async function (req, res) {
  const {
    user: { email },
  } = await getSession({ req })

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

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
      userId: user.id,
    },
  })

  return res.status(201).json({})
}

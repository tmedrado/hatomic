import { getSession } from 'next-auth/react'
import { prisma } from '../../../lib/prisma'

export default async function (req, res) {
  const {
    user: { id },
  } = await getSession({ req })

  const {
    body: { habitId },
  } = req

  await prisma.habit.delete({
    where: {
      userId: id,
      id: habitId,
    },
  })

  return res.status(201).json({})
}

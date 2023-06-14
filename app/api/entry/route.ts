import { update } from '@/utils/actions'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const data = await request.json()
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.create({
    data: {
      content: data.content,
      user: {
        connect: {
          id: user.id,
        },
      },
      analysis: {
        create: {
          mood: 'Neutral',
          subject: 'None',
          negative: false,
          summary: 'None',
          color: '#0101fe',
        },
      },
    },
  })

  update(['/journal'])

  return NextResponse.json({ data: entry })
}

import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import { prisma } from '../../utils/db'

const createNewUser = async () => {
  const user = await currentUser()
  console.log(user)

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as any,
        email: user?.emailAddresses[0].emailAddress as any,
      } ,
    })
  }

  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser

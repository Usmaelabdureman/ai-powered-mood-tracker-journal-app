<<<<<<< HEAD
import { currentUser } from '@clerk/nextjs/app-beta'
import type { User } from '@clerk/nextjs/api'
import { syncNewUser } from '@/utils/auth'
import { redirect } from 'next/navigation'

const NewUserPage = async () => {
  const user: User | null = await currentUser()

  if (user) {
    console.log('new user here', user)
    await syncNewUser(user)
    redirect('/journal')
  } else {
    redirect('/sign-in')
  }
=======

const NewUserPage = async () => {
 return (
    <div>
        Hi
    </div>
 )
>>>>>>> 3407ea4 (initialize app and add auth)
}

export default NewUserPage

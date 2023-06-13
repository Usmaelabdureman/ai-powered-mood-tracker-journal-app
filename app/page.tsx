<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'
=======
import Link from 'next/link'
>>>>>>> 3407ea4 (initialize app and add auth)
=======
import Link from 'next/link'
>>>>>>> 3407ea4 (initialize app and add auth)
=======
import Link from 'next/link'
>>>>>>> 3407ea4 (initialize app and add auth)

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best Journal app, period.</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
=======
=======
>>>>>>> 3407ea4 (initialize app and add auth)
=======
>>>>>>> 3407ea4 (initialize app and add auth)
    <div className="w-screen h-screen bg-black ">
      <div className="w-full h-full flex justify-center items-center max-w-xl mx-auto">
        <div>
          <h1 className="text-6xl text-white/80 mb-6">
            Learn more about you from, you.
          </h1>
          <p className="text-xl text-white/60 mb-6">
            this is the description of the journal app to do shit. this is the
            description of the journal app to do shit. this is the description
            of the journal app to do shit.
          </p>
          <Link href="/journal">
            <button
              type="button"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get Started
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3407ea4 (initialize app and add auth)
=======
>>>>>>> 3407ea4 (initialize app and add auth)
=======
>>>>>>> 3407ea4 (initialize app and add auth)
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
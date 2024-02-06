import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SigninPage() {
  return (
    <div className="bg-white rounded-lg p-8 flex justify-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  )
}

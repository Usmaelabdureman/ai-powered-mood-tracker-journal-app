import { SignUp } from '@clerk/nextjs'
import React from 'react'
export default function SignUpPage() {
  return (
    <div className="bg-yellow-200 rounded-lg p-8 flex justify-center">
       <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/new-user"
      afterSignUpUrl="/new-user"
    />

    </div>
   
  )
}

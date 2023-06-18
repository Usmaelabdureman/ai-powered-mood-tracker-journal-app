import { SignUp } from '@clerk/nextjs'
export default function SignUpPage() {
  return (
    <div className='flex justify-center'>
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

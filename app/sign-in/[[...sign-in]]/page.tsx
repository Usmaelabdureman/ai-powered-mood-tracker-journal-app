import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return (
    <div className="flex justify-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  )
}

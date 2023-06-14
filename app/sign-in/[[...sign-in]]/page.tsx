import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return <SignIn signUpUrl="/sign-up"     
  appearance={{
    elements: {
      formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case',
      
    }
  }}
/>
}

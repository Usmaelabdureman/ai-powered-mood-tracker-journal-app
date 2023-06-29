import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import HomePage from '../app/page'
import React from 'react'

vi.mock('@clerk/nextjs', () => {
  return {
    auth: () => new Promise((resolve) => resolve({ userId: 'asdlfjalsdkfj' })),
    ClerkProvider: ({ children }:{children:any}) => <div>{children}</div>,
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: 'user_2RAJATL7aQ3X4o4I9vNuzak4YJIC',
        fullName: 'Usmael Abdurhaman',
      },
    }),
  }
})

test('Home', async () => {
  render(await HomePage())
  expect(screen.getByText('get started')).toBeTruthy()
})
import { screen, render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import ErrorPage from './index.js'

// Suppress console.error messages during tests
const originalConsoleError = console.error
console.error = vi.fn()

describe('Renders ErrorPage correctly', async () => {
  it('Should render the error page correctly', () => {
    console.error = vi.fn()

    const badRoute = '/some/bad/route'
    const router = createMemoryRouter([{ path: '/', element: <div />, errorElement: <ErrorPage /> }], { initialEntries: [badRoute] })

    render(<RouterProvider router={router} />)

    expect(screen.getByText('Oops!')).toBeInTheDocument()
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument()
    expect(screen.getByText(`404 Error: No route matches URL "${badRoute}"`)).toBeInTheDocument()
  })
})

console.error = originalConsoleError

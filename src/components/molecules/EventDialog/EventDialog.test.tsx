import { act, fireEvent, render, screen } from '@testing-library/react'

import EventDialog from './index.js'

describe('EventDialog', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('appears after a delay', () => {
    vi.setSystemTime(new Date(2026, 9, 19))
    render(<EventDialog />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByRole('img', { name: /open day/i })).toBeInTheDocument()
  })

  it('can be dismissed', () => {
    vi.setSystemTime(new Date(2026, 9, 19))
    render(<EventDialog />)
    act(() => {
      vi.advanceTimersByTime(3000)
    })

    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    act(() => {
      vi.runAllTimers()
    })

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('still appears on October 25th', () => {
    vi.setSystemTime(new Date(2026, 9, 25, 23, 59))
    render(<EventDialog />)
    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByRole('img', { name: /open day/i })).toBeInTheDocument()
  })

  it('does not appear after October 25th', () => {
    vi.setSystemTime(new Date(2026, 9, 26))
    render(<EventDialog />)
    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})

import { fireEvent, render, screen, within } from '@testing-library/react'

import ListView from './ListView.js'
import type { Event } from './types.js'

const makeEvent = (id: string, title: string, date: string, city = 'Ferrara'): Event => ({
  id,
  title,
  date: new Date(date),
  location: { name: 'Piazza', city, lat: 44, lng: 11 },
})

describe('Events list', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-10-19T12:00:00'))
  })

  afterEach(() => vi.useRealTimers())

  it('separates events and sorts upcoming ascending and past descending', () => {
    render(
      <ListView
        events={[
          makeEvent('past-old', 'Past old', '2026-01-01'),
          makeEvent('future-late', 'Future late', '2026-12-01'),
          makeEvent('past-new', 'Past new', '2026-10-01'),
          makeEvent('future-soon', 'Future soon', '2026-11-01'),
        ]}
        onSelect={vi.fn()}
      />
    )

    const upcoming = within(screen.getByRole('region', { name: 'prossimi eventi' }))
    const past = within(screen.getByRole('region', { name: 'eventi passati' }))
    expect(upcoming.getAllByRole('heading', { level: 2 }).map(node => node.textContent)).toEqual(['Future soon', 'Future late'])
    expect(past.getAllByRole('heading', { level: 2 }).map(node => node.textContent)).toEqual(['Past new', 'Past old'])
  })

  it('renders date ranges and invokes onSelect for the clicked card', () => {
    const onSelect = vi.fn()
    const event = { ...makeEvent('range', 'Long medieval event', '2026-11-01', 'San Martino'), endDate: new Date('2026-11-03') }
    render(<ListView events={[event]} onSelect={onSelect} />)

    expect(screen.getByText(/1-3 novembre 2026/)).toBeInTheDocument()
    expect(screen.getByText('San Martino')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('heading', { name: 'Long medieval event' }))
    expect(onSelect).toHaveBeenCalledWith(event)
  })

  it('uses a single fluid column on small screens', () => {
    render(<ListView events={[makeEvent('one', 'A very long event title that must wrap', '2026-11-01')]} onSelect={vi.fn()} />)

    const card = screen.getByRole('heading', { name: /very long event/ }).closest('.MuiCard-root')
    expect(card).toHaveStyle({ width: '100%', minWidth: '0', boxSizing: 'border-box' })
    expect(screen.getByRole('region', { name: 'prossimi eventi' })).toHaveStyle({ width: '100%', minWidth: '0' })
  })
})

import { fireEvent, screen, within } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import EventsPage from './index.js'

vi.mock('./events.js', () => ({
  events: [
    {
      id: 'current',
      title: 'Evento anno corrente',
      date: new Date('2026-06-01'),
      location: { name: 'Piazza', city: 'Ferrara', lat: 44, lng: 11 },
    },
    {
      id: 'previous',
      title: 'Evento anno precedente',
      date: new Date('2025-06-01'),
      location: { name: 'Piazza', city: 'Ferrara', lat: 44, lng: 11 },
    },
  ],
}))

vi.mock('./MapView.js', () => ({
  default: ({ events }: { events: { title: string }[] }) => (
    <div role="region" aria-label="mappa eventi">
      {events.map(event => (
        <span key={event.title}>{event.title}</span>
      ))}
    </div>
  ),
}))

describe('EventsPage year selection', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T12:00:00'))
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      }
    )
  })

  afterEach(() => vi.useRealTimers())

  it('defaults to the current year and offers years present in the event data', () => {
    render(<EventsPage />)

    expect(screen.getByRole('combobox', { name: 'Anno' })).toHaveTextContent('2026')
    expect(screen.getByRole('heading', { name: 'Evento anno corrente' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Evento anno precedente' })).not.toBeInTheDocument()

    fireEvent.mouseDown(screen.getByRole('combobox', { name: 'Anno' }))
    const options = screen.getAllByRole('option').map(option => option.textContent)
    expect(options).toEqual(['2026', '2025'])
  })

  it('filters the list and map to the selected year', async () => {
    render(<EventsPage />)

    fireEvent.mouseDown(screen.getByRole('combobox', { name: 'Anno' }))
    fireEvent.click(within(screen.getByRole('listbox')).getByRole('option', { name: '2025' }))

    expect(screen.getByRole('heading', { name: 'Evento anno precedente' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Evento anno corrente' })).not.toBeInTheDocument()

    vi.useRealTimers()
    fireEvent.click(screen.getByRole('tab', { name: 'Mappa' }))
    expect(await screen.findByRole('region', { name: 'mappa eventi' })).toHaveTextContent('Evento anno precedente')
    expect(screen.queryByText('Evento anno corrente')).not.toBeInTheDocument()
  })
})

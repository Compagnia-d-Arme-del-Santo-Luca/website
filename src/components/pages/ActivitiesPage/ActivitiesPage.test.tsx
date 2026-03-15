import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

import { renderWithRouter as render } from 'components/utils/tests'

import ActivitiesPage from '.'

// vi.stubGlobal('open', vi.fn())

describe('Activities Page', () => {
  // const open = vi.spyOn(window, 'open')

  it('Should render the page correctly on desktop', async () => {
    await render(<ActivitiesPage />)

    expect(screen.getAllByText('Attività')).toHaveLength(3) // title, appbar button and appbar drawer button
    expect(screen.getByText('Percorsi didattici')).toBeInTheDocument()
    expect(screen.getByText('Sartoria')).toBeInTheDocument()
    expect(screen.getByText('Organizzazione eventi')).toBeInTheDocument()
  })

  it('Should render the page correctly on mobile', async () => {
    // Set the window size to mobile (Galaxy Note 20 Android 11)
    window.innerWidth = 412
    window.innerHeight = 915
    await render(<ActivitiesPage />)

    expect(screen.getAllByText('Attività')).toHaveLength(3) // title, appbar button and appbar drawer button
    expect(screen.getByText('Percorsi didattici')).toBeInTheDocument()
    expect(screen.getByText('Sartoria')).toBeInTheDocument()
    expect(screen.getByText('Organizzazione eventi')).toBeInTheDocument()
  })
})

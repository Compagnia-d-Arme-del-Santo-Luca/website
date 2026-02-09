import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import MainPage from '.'

// Tests
describe('Main page', () => {
  it('Should render the page correctly on desktop', async () => {
    await render(<MainPage />)

    // Make sure the page title is correct
    expect(await screen.findByText("Compagnia d'Arme del Santo Luca")).toBeInTheDocument()

    // Make sure the project spotlights are present for both desktop and mobile
    expect(screen.getAllByText('Chi Siamo')).toHaveLength(2)
    expect(screen.getAllByText('Vita Civile')).toHaveLength(2)
    expect(screen.getAllByText('Attività Didattiche')).toHaveLength(2)
    expect(screen.getAllByText('Vita Militare')).toHaveLength(2)
  })
})

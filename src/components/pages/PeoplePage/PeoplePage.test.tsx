import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import ProjectsPage from '.'

vi.stubGlobal('open', vi.fn())
describe('PeoplePage component', () => {
  test('renders without crashing and displays the correct project titles', () => {
    render(<ProjectsPage />)

    // check the section titles
    expect(screen.getByText('Ferantino')).toBeInTheDocument()
    expect(screen.getByText('Galacino Galaci')).toBeInTheDocument()
  })
})

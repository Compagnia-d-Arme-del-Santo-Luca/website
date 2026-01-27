import { screen } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import ProjectsPage from '.'

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() } }),
}))

vi.stubGlobal('open', vi.fn())
describe('ProjectsPage component', () => {
  test('renders without crashing and displays the correct project titles', () => {
    render(<ProjectsPage />)

    // check the section titles
    expect(screen.getByText('Robotics')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
    expect(screen.getByText('Hobbies')).toBeInTheDocument()

    // check some of the projects
    expect(screen.getByText('LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots')).toBeInTheDocument()
    expect(screen.getByText("Revamping HHCM's Modular: Swift Generation and Control of Modular Robot Models")).toBeInTheDocument()
    expect(screen.getByText("Scuola d'arme")).toBeInTheDocument()
  })
})

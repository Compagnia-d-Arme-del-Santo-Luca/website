import { screen, fireEvent } from '@testing-library/react'

import 'components/molecules/EmplyeeStack/index.js'
import { renderWithRouter as render } from 'components/utils/tests/index.js'
import ProjectsPage from './index.js'

// Mock EmplyeeStack so tests can simulate a card click opening the description dialog
vi.stubGlobal('open', vi.fn())
vi.mock('components/molecules/EmplyeeStack/index.js', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => (
    <button
      data-testid="mock-stack"
      onClick={e => props.onClick?.(e, { title: 'Mock Person', position: 'Tester', image: '/img/mock.jpg', body: ['mock body'] })}>
      MockStack
    </button>
  ),
}))

describe('PeoplePage component', () => {
  test('renders without crashing and displays the correct project titles', () => {
    render(<ProjectsPage />)

    // page title renders and stacks are present (mocked)
    expect(screen.getByLabelText('page-title')).toBeInTheDocument()
    const stacks = screen.getAllByTestId('mock-stack')
    expect(stacks).not.toHaveLength(0)
  })

  test('opens description dialog when a stack item is clicked', () => {
    render(<ProjectsPage />)

    const [btn] = screen.getAllByTestId('mock-stack')
    fireEvent.click(btn)

    // dialog should show the mocked person's title
    expect(screen.getByText('Mock Person')).toBeInTheDocument()
  })
})

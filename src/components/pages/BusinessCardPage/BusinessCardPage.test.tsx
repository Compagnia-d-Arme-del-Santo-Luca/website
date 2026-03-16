import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import BusinessCardPage from './index.js'

vi.mock('./envVars.js', () => ({
  NAME: 'Test Name',
  ASSOCIATION: 'Test Association',
  POSITION: 'Test Position',
  VAT: 'Test VAT',
  PHONE: '+123456789',
  EMAIL: 'test@example.com',
  FACEBOOK: 'testfacebook',
  INSTAGRAM: 'testinstagram',
}))

// Mock window.print
const mockPrint = vi.fn()
window.print = mockPrint

describe('BusinessCardPage', () => {
  beforeEach(() => {
    mockPrint.mockClear()
  })

  it('renders correctly with environment variables', () => {
    render(<BusinessCardPage />)

    // Name appears in uppercase in the first card
    expect(screen.getByText('Test Name')).toBeInTheDocument()
    expect(screen.getByText('Test Association')).toBeInTheDocument()
    expect(screen.getByText('Test Position')).toBeInTheDocument()

    // Check if values are rendered correctly in the second card
    expect(screen.getByText('+123456789')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
    expect(screen.getByText('www.compagniadarmedelsantoluca.it')).toBeInTheDocument()
    expect(screen.getByText('@testinstagram')).toBeInTheDocument()
    expect(screen.getByText('@testfacebook')).toBeInTheDocument()
  })

  it('has correct links with proper href attributes', () => {
    render(<BusinessCardPage />)

    // Check phone link
    const phoneLink = screen.getByText('+123456789').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+123456789')

    // Check email link
    const emailLink = screen.getByText('test@example.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com')

    // Check website link
    const websiteLink = screen.getByText('www.compagniadarmedelsantoluca.it').closest('a')
    expect(websiteLink).toHaveAttribute('href', 'https://www.compagniadarmedelsantoluca.it/')

    // Check Facebook Link
    const linkedinLink = screen.getByText('@testfacebook').closest('a')
    expect(linkedinLink).toHaveAttribute('href', 'https://facebook.com/testfacebook/')
  })

  it('calls window.print when print button is clicked', async () => {
    const user = userEvent.setup()
    render(<BusinessCardPage />)

    await user.click(screen.getByText('Print Business Card'))

    expect(mockPrint).toHaveBeenCalledTimes(1)
  })

  it('renders correct number of business cards', () => {
    render(<BusinessCardPage />)

    const businessCards = screen.getAllByRole('img', { name: /logo|qr code/i })
    expect(businessCards).toHaveLength(2)
  })
})

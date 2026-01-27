import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import BusinessCardPage from './index.js'

vi.mock('./envVars.js', () => ({
  NAME: 'Test Name',
  POSITION: 'Test Position',
  VAT: 'Test VAT',
  PHONE: '+123456789',
  EMAIL: 'test@example.com',
  FACEBOOK: 'testfacebook',
}))

// Mock window.print
const mockPrint = vi.fn()
window.print = mockPrint

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() } }),
}))

describe('BusinessCardPage', () => {
  beforeEach(() => {
    mockPrint.mockClear()
  })

  it('renders correctly with environment variables', () => {
    render(<BusinessCardPage />)

    // Name appears in uppercase in the first card
    expect(screen.getAllByText('Test Name')).toHaveLength(2)
    expect(screen.getByText('Test Position')).toBeInTheDocument()

    // Check if values are rendered correctly in the second card
    expect(screen.getByText('Test VAT')).toBeInTheDocument()
    expect(screen.getByText('+123456789')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
    expect(screen.getByText('www.m-tartari.eu')).toBeInTheDocument()
    expect(screen.getByText('testlinkedin')).toBeInTheDocument()
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
    const websiteLink = screen.getByText('www.m-tartari.eu').closest('a')
    expect(websiteLink).toHaveAttribute('href', 'https://www.m-tartari.eu')

    // Check Facebook Link
    const linkedinLink = screen.getByText('testlinkedin').closest('a')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/testlinkedin/')
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

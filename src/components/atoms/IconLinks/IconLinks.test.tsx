// IconLinks.test.tsx

import { render, screen } from '@testing-library/react'

import * as IconLinks from './index.js'

const labels: { [key: string]: string } = {
  DescriptionIconLink: 'Doc-button',
  EmailIconLink: 'Email-button',
  InstagramIconLink: 'Instagram-button',
  FacebookIconLink: 'Facebook-button',
  AcademyIconLink: 'Academy-button',
  VideoIconLink: 'Video-button',
  ExternalIconLink: 'External-link-button',
  ExternalAppIconLink: 'External-app-button',
}

vi.stubGlobal('open', vi.fn())
describe('IconLinks', () => {
  const defaultProps = {
    href: 'https://test.com',
    fontSize: 'large' as const,
  }

  describe.each(Object.entries(IconLinks))('%s', (name, Icon) => {
    test('renders correctly and without crashing', async () => {
      render(<Icon {...defaultProps} />)
      const link = screen.getByLabelText(labels[name])
      expect(link).toHaveAttribute('href', defaultProps.href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    test("renders the badge when 'index' is provided", () => {
      render(<Icon {...defaultProps} index={1} />)
      expect(screen.getByText(1)).toBeInTheDocument()
    })
  })
})

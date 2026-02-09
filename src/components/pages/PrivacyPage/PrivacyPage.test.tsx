import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'

import PrivacyPage from './index.js'

describe('PrivacyPage', () => {
  it('renders the Privacy Policy page', () => {
    render(<PrivacyPage />)
    expect(screen.getAllByText('Privacy Policy')).toHaveLength(2) // title and footer
    expect(screen.getAllByText('Cookie Policy')).toHaveLength(1) // body
    expect(screen.getAllByText('Cookie Preferences')).toHaveLength(1) // footer
  })
})
